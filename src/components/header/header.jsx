import React from "react";
import styles from "./header.module.sass";
import pickerLogo from "../assets/images/pickerLogo.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                
            </div>
            <div className={styles.links}>
                <a href="#colleges" className={styles.link}>Изучить места!</a>
                <a href="#info" className={styles.link}>О проекте</a>
            </div>
        </div>
    );
};

export default Header;