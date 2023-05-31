import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div>
                <div className={styles.head}>
                    <div><Image src={logo} alt="" /></div>
                    <div className="tw-ml-[10px]">留言时光</div>
                </div>
                <div className="tw-mt-[24px]">
                    <p>
                        用户将留言便签贴在留言墙上,用户可以自定义便签颜色和内容属性
                    </p>
                    <p>
                        不仅可以用于交流,也是一场记录
                    </p>
                    <p className="tw-mt-[20px]">
                        <span>申明</span>
                        <span className="tw-ml-[20px]">备案号xxxxx</span>
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.link}>链接</div>
                <div>b站</div>
                <div>抖音</div>
                <div>github</div>
                <div>gitee</div>
            </div>
            <div className={styles.reward}>
                <div className="tw-text-[16px]">打赏</div>
            </div>
        </div>
    )
}