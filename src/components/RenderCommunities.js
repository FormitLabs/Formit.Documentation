import React from "react";
import styles from "./RenderCommunities.module.css";

function Community({ src, alt, children }) {
  return (
    <div className={styles["community-container"]}>
      <img src={src} alt={alt} />
      <p className={styles["community-description"]}>{children}</p>
    </div>
  );
}

export default function RenderCommunities() {
  return (
    <div className={styles.communities}>
      <Community src="/img/tgIcon.svg" alt="Логотип Telegram">
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
      </Community>
    </div>
  );
}
