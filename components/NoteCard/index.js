import React from "react";
import styles from "./index.module.css";
import { translateDate } from '../../utils/utils';
import clsx from "clsx";

const NoteCard = (props) => {
    const { id, moment, content, classname, bgColor, label, like, comment, activeKey, myKey, handClickNote } = props;
    const onHandClickNote = (item) => {
        handClickNote(item);
    }
    return (
        <div onClick={() => onHandClickNote(props)} style={{ background: bgColor }} className={clsx(styles.noteCard, classname, activeKey === myKey ? styles.active : "")}>
            <div className={styles.title}><span>{translateDate(moment)}</span><span>label{label}</span></div>
            <div className={styles.content}>
                {content}
            </div>
            <div className={styles.tail}>
                <div className="tw-flex tw-items-center">
                    <div className={clsx("icon iconfont icon-love", styles.icon, styles.iconLove)}></div>
                    <div className={styles.iconText}>{like}</div>
                    <div className={clsx("icon iconfont icon-talk", styles.icon, styles.iconTalk)}></div>
                    <div className={styles.iconText}>{comment}</div>
                </div>
                <div className={styles.author}>
                        云帆
                </div>
            </div>
        </div>
    )
}

export default NoteCard;