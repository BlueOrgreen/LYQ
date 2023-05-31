import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { bgColorMap1, bgColorMap, labelMap } from "../../utils/data"
import clsx from "clsx";
import YFButton from "../YFButton";

const NewCard = ({ onHandleClose }) => {
    const [activeIndex, setSelectIndex] = useState(0);
    const [activelabel, setActivelabel] = useState('all');
    const { pathname } = useRouter()
    const labels = useMemo(() => {
        if(pathname === "/") {
            return labelMap[0];
        } else {
            return labelMap[1];
        }
    }, pathname)
    
    return (
        <div className={styles.newCard}>
            <div className={styles.colors}>
                {bgColorMap1.map((color, index) => {
                    return (
                        <div
                            style={{ background: color }}
                            className={clsx(styles.colorItem, activeIndex === index ? styles.itemSelect : "")}
                            onClick={() => setSelectIndex(index)}
                        ></div>
                    )
                })}
            </div>
            <div style={{ background: bgColorMap[activeIndex] }} className={styles.main}>
                <textarea placeholder="留言..." className={styles.message} maxLength={96}></textarea>
                <input type="text" placeholder="签名" className={styles.name} />
            </div>
            <div className={styles.labelTitle}>选择标签</div>
            <div className={styles.labels}>
                {labels.map((item, index) => {
                    return <div
                                className={clsx(styles.labelItem, activelabel === item.key ? styles.selected : "")}
                                key={item.key}
                                onClick={() => setActivelabel(item.key)}
                            >
                                {item.name}
                            </div>
                }
                )}
            </div>
            <div className={styles.labelTitle}>免责声明</div>
            <div className={styles.statement}>
                <div>留言时光是本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：</div>
                <div> 1、反对宪法所确定的基本原则的;</div>
                <div>2、危害国家安全, 泄露国家秘密, 颠覆国家政权, 破坏国家统一的；</div>
                <div>3、损害国家荣誉和利益的;</div>
                <div>4、煽动民族仇恨、民族歧视, 破坏民族团结的;</div>
                <div>5、破坏国家宗教政策, 宣扬邪教和封建迷信的;</div>
                <div>6、散布谣言, 扰乱社会秩序, 破坏社会稳定的;</div>
                <div>7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的;</div>
                <div>8、侮辱或者诽谤他人, 侵害他人合法权益的;</div>
                <div>9、含有法律、行政法规禁止的其他内容的信息。</div>
            </div>
            <div className={styles.footer}>
                <YFButton size="big" type="secondary"onClick={onHandleClose}>丢弃</YFButton>
                <YFButton size="big" className="tw-ml-[10px] tw-w-[200px]" >确定</YFButton>
            </div>
        </div>
    )
}

export default NewCard;