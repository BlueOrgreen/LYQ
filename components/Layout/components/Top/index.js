import React, { useCallback } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg"
import { useRouter } from "next/router";
import { useTheme } from "../../../../context/Theme";

const Top = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { pathname } = router;
    console.log('top router', router, 'theme', theme);

    const switchMode = useCallback(() => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [theme])

    return (
        <div className={styles.top}>
            <div className={styles.logoBox}>
                <Image src={logo} alt="" />
                <span className={styles.logoText}>留言时光</span>
            </div>
            <div className={styles.menu}>
                <div className={pathname === "/" ? styles.active : ""}>留言墙</div>
                <div style={{ marginLeft: "24px" }} className={pathname === "/photo" ? styles.active : ""}>照片墙</div>
            </div>
            <div className={styles.user} onClick={switchMode}>
                {/* <button onClick={switchMode}>切换</button>
                user */}
                <div className={styles.userHead}>
                user
                </div>
            </div>
        </div>
    )
}

export default Top;