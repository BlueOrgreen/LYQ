import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import {CSSTransition} from 'react-transition-group'

const YFModal = forwardRef((props, ref) => {
    const { children } = props;
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        modalVisible: visible,
        setVisible,
    }))

    return (
        <CSSTransition
            in={visible}
            timeout={300}
            classNames={clsx(styles.modal, "show")}
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
})

YFModal.defaultProps = {
    visible: false
}

export default YFModal;