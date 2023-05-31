import React from "react";
import styles from './index.module.css';
import clsx from "clsx";

const YFButton = ({ className, children, type, size, style, onClick }) => {

    return (
        <button style={...style} className={clsx(
            className,
            styles.btn,
            size === "big" ? styles.big : size === "small" ? styles.small : "",
            type === "primary" ? styles.primary 
                : type === "secondary" ?  styles.secondary 
                : type === "cprimary" ? styles.cprimary
                : type === "csecondary" ? styles.csecondary
                : ""
        )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

YFButton.defaultProps = {
    type: "primary",
    size: "default"
}

export default YFButton;