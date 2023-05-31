import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    type: 'message',
    messageType: "all",
    photoType: "all",
    photoDetail: "",
  };
  
  // Modal Slice
  export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
      setModalState(state, action) {
            state.type = action.payload;
      },
      setMessageType(state, action) {
        state.messageType = action.payload;
      },
      setPhotoType(state, action) {
        state.photoType = action.payload;
      },
      setPhotoDetail(state, action) {
        state.photoDetail = action.payload;
      },
    },
  
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  });
  
  export const { setModalState, setMessageType, setPhotoType, setPhotoDetail } = modalSlice.actions;
  
  export const selectModalState = (state) => state.modal;
  
  export default modalSlice.reducer;