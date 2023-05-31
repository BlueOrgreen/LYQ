import React from "react";
import styles from './index.module.css';
import clsx from "clsx";
import { setPhotoDetail, selectModalState } from "../../store/modalSlice";
import { useSelector, useDispatch } from "react-redux";


const YFViewer = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(selectModalState);
    const { photoDetail } = modalState;
   
    const goLeft = () => {
        const nextPage = photoDetail - 1;
        console.log('left nextPage', photoDetail);
        dispatch(setPhotoDetail(nextPage === 0 ? 4 : nextPage))
    }

    const goRight = () => {
        const nextPage = photoDetail + 1;
        console.log('right nextPage', photoDetail);
        dispatch(setPhotoDetail(nextPage === 5 ? 1 : nextPage))
    }

    return (
        <div className={styles.yfviewer}>
            <div className={styles.bg}>111</div>
            <div className={styles.viewPhoto}>
                <img src={"/imags/img" + `${photoDetail}` + ".jpg"} />
            </div>
            <div className={clsx(styles.switch, styles.switchLeft)}>
                <span className={clsx("icon iconfont icon-left")} onClick={goLeft}></span>
            </div>
            <div className={clsx(styles.switch, styles.switchRight)}>
                <span className={clsx("icon iconfont icon-right")} onClick={goRight}></span>
            </div>
        </div>
    )
}

export default YFViewer;