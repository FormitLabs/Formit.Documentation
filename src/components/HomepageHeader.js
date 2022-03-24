import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageHeader.module.css';
import ReactPlayer from "react-player/lazy";

export default function HomepageHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-text"]}>Библиотека знаний Altec<span className="selected-text">Insolations</span></h1>
      <Link
        className={styles["button-for-resources"]}
        to="/docs/Добро пожаловать">
        <span>Перейти к ресурсам</span>
      </Link>
      <div className={styles["video-wrapper"]}>
        <div className={styles.rectangle} />
        <ReactPlayer
          className={styles.video}
          width="inherit"
          height="inherit"
          url="https://www.youtube.com/watch?v=jWUSUxqEsqM"
          controls={true}
          light={true}
          playing={true}
        />
      </div>
    </header>
  );
}