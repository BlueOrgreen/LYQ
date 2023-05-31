import React, { useState, useRef } from "react";
import styles from './index.module.css';
import ReactRotatingText from "react-rotating-text";
import { useTransition, animated } from "@react-spring/web";
import { labelMap } from '../../utils/data';
import { selectModalState, setPhotoType, setPhotoDetail } from "../../store/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { note } from '../../mock/index'
import PhotoCard from "../../components/PhotoCard";
import YFViewer from "../../components/YFViewer";
import YFModal from '../../components/YFModal';
import ModifyCard from '../../components/ModifyCard';

const Photo = () => {
  const modalRef = useRef();
    const modalState = useSelector(selectModalState);
    const [photoDetailVisible, setPhotoDetailVisible] = useState(false);
    const { photoType, photoDetail } = modalState;
    const dispatch = useDispatch();
    const transition = useTransition(true, {
        from: { opacity: 0, transform: 'translate3d(0, 30%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        config: {
          duration: 500,
        },
        delay: 300,
      })

      const handleClickPhotoType = (type) => {
        dispatch(setPhotoType(type))
      }

      const closeModal = () => {
        const { setVisible } = modalRef.current;
        setPhotoDetailVisible(false)
        setVisible(false)
      }

      const handleClickPhoto = (imgIdx) => {
        const { setVisible } = modalRef.current;
        dispatch(setPhotoDetail(imgIdx))
        setPhotoDetailVisible(true)
        setVisible(true)
      }

    return (
        <div className={styles.photo}>
            <div className={styles.title}>
            <div>照片墙</div>
            <div>
            <ReactRotatingText
                typingInterval={100}
                items={[
                "手机空间余额不足",
                "到这里来充值",
                "可以的话",
                "帮忙在我的草坪踩一踩 ",
                "踩一踩的朋友今年一定能暴富! "
                ]}
            />
            </div>
            </div>
            {transition((style, i) => (
        <animated.div style={{
          ...style,
        }}> 
          <div className={styles.label}>
                  {labelMap[1].map((item) => (
                    <p
                      className={item.key === photoType ? styles.selected : ""}
                      onClick={() => handleClickPhotoType(item.key)}  
                    >{item.name}</p>
                  ))}
            </div>
          <div className={styles.photoCardContainer}>
            {note.data.map((item, index) => {
              return (
                <PhotoCard {...item} idx={index} onHandClickPhoto={handleClickPhoto} />
              )
            })}
          </div>
        </animated.div>
      ))}
      {photoDetailVisible && <YFViewer />}
      <YFModal ref={modalRef}>
          <ModifyCard handleClickClose={closeModal} />
        </YFModal>
        </div>
    )
}

export default Photo;