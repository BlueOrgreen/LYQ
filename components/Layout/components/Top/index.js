import React, { useCallback } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setModalState, selectModalState } from '../../../../store/modalSlice'
import logo from "../../../../public/logo.svg"
import { useRouter } from "next/router";
import { useTheme } from "../../../../context/Theme";
import YFButton from "../../../YFButton";

const Top = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { push, pathname } = router;
    const dispatch = useDispatch();
    const modalState = useSelector(selectModalState);

    const switchMode = useCallback(() => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [theme])

    const switchType = async (type) => {
        await dispatch(setModalState(type))
        if(type === "message") {
            push(`/`)
        } else {
            push(`/${type}`)
        }
    }

    return (
        <div className={styles.top}>
            <div className={styles.logoBox}>
                <Image src={logo} alt="" />
                <span className={styles.logoText}>留言时光</span>
            </div>
            <div className={styles.menu}>
                <YFButton type={pathname === "/" ? "cprimary" : "csecondary"} onClick={() => switchType("message")}>
                    留言墙
                </YFButton>
                <YFButton style={{ marginLeft: "1.5rem" }}  size="max" type={pathname === "/photo" ? "cprimary" : "csecondary"} onClick={() => switchType("photo")}>
                   照片墙
                </YFButton>
            </div>
            <div className={styles.user} onClick={switchMode}>
                <div className={styles.userHead}>
                user
                </div>
            </div>
        </div>
    )
}

export default Top;