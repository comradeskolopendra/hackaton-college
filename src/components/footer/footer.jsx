import React from "react";
import styles from "./footer.module.sass";
import facebook from "../assets/images/facebook.svg";
import github from "../assets/images/github.svg";
import inst from "../assets/images/inst.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import youtube from "../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className={styles.footer} id="info">
      <div className={styles.footerInner}>
        <div className={styles.socials}>
          {[facebook, github, inst, twitter, linkedin, youtube].map(
            (element) => (
              <a href="#" className={styles.link}>
                <img src={element} className={styles.socialImage} alt="" />
              </a>
            )
          )}
        </div>
        <div className={styles.info}>
          Суть заключается в том, чтобы дать полноценную информацию о
          предоставляемом обучении в стенах данного учебного заведения. Это
          поможет множеству новобранцев-студентов изучить и подать свои заявки
          на поступление.
        </div>
        <div className={styles.copyright}>
          Copyright © 2022, Azam, Dima, Batyr
        </div>
      </div>
    </div>
  );
};

export default Footer;
