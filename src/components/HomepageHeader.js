import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
    return (
      <header className={styles.header}>
        <div className={styles["header-first-columns"]}>
          <h1 className={styles["header-text"]}>Библиотека знаний Altec<span className="selected-text">Insolations</span></h1>
          <Link
            className={styles["button-for-resources"]}
            to="/docs/Добро пожаловать/Как начать">
            <span>Перейти к ресурсам</span>
          </Link>
        </div>
        <div className={styles["video-wrapper"]}>
          <div className={styles.rectangle}></div>
          <img className={styles.video} src="/img/video.png"/>
        </div>
      </header>
    );
  }