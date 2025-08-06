import styles from "./Header.module.css";
import React from "react";
import Link from "@docusaurus/Link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-text"]}>
        Библиотека знаний
        <br />
        <span className={styles.highlight}>Formit</span>
      </h1>
      <Link className={styles["button-for-resources"]} to="/docs/">
        <span>Перейти к ресурсам</span>
      </Link>
      {/* TODO: загрузить видео в вк или на рутуб */}
      {/*<div className={styles["video-wrapper"]}>
        <div className={styles.rectangle} />
        <ReactPlayer
          className={styles.video}
          width="inherit"
          height="inherit"
          url="https://www.youtube.com/watch?v=jWUSUxqEsqM"
          controls
          light
          playing
        />
      </div>*/}
    </header>
  );
}
