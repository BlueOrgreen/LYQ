import React from "react";
import styles from './index.module.css';
import Top from "./components/Top";
// import video from "../../public/video.mp4"


const Layout = ({ children }) => {

    return (
        <>
        <div className={styles.layout}>
            <Top />
            <video muted autoPlay loop src="/video.mp4" className={styles.video} />
            {children}
            <div>footer</div>
        </div>
        </>
    )
}

export default Layout;