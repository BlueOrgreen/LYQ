import React from "react";
import styles from './index.module.css';
import Top from "./components/Top";
import Footer from "./components/Footer";


const Layout = ({ children }) => {

    return (
        <>
        <div className={styles.layout}>
            <Top />
            <video muted autoPlay loop src="/video.mp4" className={styles.video} />
            {children}
            <Footer />
        </div>
        </>
    )
}

export default Layout;