import styles from "./Communities.module.css";
import React from "react";
import TgIcon from "/img/tgIcon.svg";

function CommunityCard({ Icon, children }) {
  return (
    <div className={styles["community-container"]}>
      <Icon className={styles["icon"]} />
      <p className={styles["community-description"]}>{children}</p>
    </div>
  );
}

export default function Communities() {
  return (
    <div className={styles.communities}>
      <CommunityCard Icon={TgIcon}>
        Мы активно развиваем сообщество <b>Formit</b> в&nbsp;
        <a
          href="https://t.me/altecformit"
          target="_blank"
          rel="noopener noreferrer"
          className="selected-text"
        >
          Telegram
        </a>
        .
        <br />
        Подписывайтесь, чтобы ничего не&nbsp;пропустить!
      </CommunityCard>
    </div>
  );
}
