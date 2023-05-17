import React from "react";
import styles from "./header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <a href="#" className={styles.sassyLogo}>
            Picker
          </a>
        </div>
        <div className={styles.links}>
          <a href="#colleges" className={styles.link}>
            Изучить места!
          </a>
          <a href="#info" className={styles.link}>
            О проекте
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
