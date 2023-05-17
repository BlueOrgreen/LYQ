import React, { useMemo } from "react";
import styles from './index.module.css';
import clsx from "clsx";

const YFButton = ({ children, type, size }) => {
    console.log('YFButton', type);

    return (
        <button className={clsx(
            styles.btn,
            size === "big" ? styles.big : size === "small" ? styles.small : "" 
        )}>
            {children}
        </button>
    )
}

YFButton.defaultProps = {
    type: "primary",
    size: "default"
}

export default YFButton;