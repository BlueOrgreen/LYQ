import React from "react";
import styles from './index.module.css';
import clsx from "clsx";


const PhotoCard = ({ idx, like, imgurl, onHandClickPhoto }) => {

    const handClickPhoto = (imgIdx) => {
        onHandClickPhoto(imgIdx % 4 + 1)
    }
    // `/imags/img${imgurl}.jpg`
    return (
        <div className={styles.photoCard} onClick={() => handClickPhoto(idx)}>
            <img src={"/imags/img" + `${imgurl}` + ".jpg"} alt="" />
            <div className={styles.photoBg}></div>
            <div className={styles.photoLike}>
                <span className={clsx("icon iconfont icon-love", styles.iconLike)}></span>
                <span className={styles.likeDta}>10</span>
            </div>
        </div>
    )
}

export default PhotoCard;