import React from "react";
// @ts-ignore
import StoreBadge from "react-store-badge";

import styles from "./PageFooter.module.scss";
import vkIcon from "./images/icon_vk.svg";
import okIcon from "./images/icon_ok.svg";
import twIcon from "./images/icon_tw.svg";
import fbIcon from "./images/icon_fb.svg";

export const PageFooter = () => {
  const renderList = () => {
    return (
      <ul className={styles.list}>
        <span className={styles.listHeading}>Раздел 1</span>
        {Array.from(Array(5)).map((_, index) => (
          <li key={index} className={styles.listItem}>
            <a>Подраздел</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className={styles.container}>
      <section className={styles.topSection}>
        <div>
          <span>
            <img
              className={styles.logo}
              src={process.env.PUBLIC_URL + "/not-a-kfc-logo.svg"}
              alt="logo"
            />
          </span>
        </div>
      </section>

      <section className={styles.middleSection}>
        {renderList()}
        {renderList()}
        <span className={styles.leCircle} />
        {renderList()}
        {renderList()}
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.social}>
          <img
            className={styles.socialIcon}
            src={vkIcon}
            alt="иконка вконтакте"
          />
          <img
            className={styles.socialIcon}
            src={fbIcon}
            alt="иконка фэйсбук"
          />
          <img
            className={styles.socialIcon}
            src={twIcon}
            alt="иконка твиттер"
          />
          <img
            className={styles.socialIcon}
            src={okIcon}
            alt="иконка одноклассников"
          />
        </div>

        <div className={styles.storeBadges}>
          <StoreBadge
            name="not-a-kfc"
            googlePlayUrl="https://play.google.com/store/"
            appStoreUrl="https://apps.apple.com/us/app/"
          />
        </div>
      </section>
    </footer>
  );
};
