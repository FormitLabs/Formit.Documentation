import React from 'react';
import styles from './InformationCard.module.css';

export default function InformationCard({src, title, description}) {
    return (
      <div className={styles["info-container"]}>
        <img className={styles["info-image"]} src={src} alt={title}/>
        <h3 className={styles["info-title"]}>{title}</h3>
        <p className={styles["info-description"]}>{description}</p>
      </div>
    );
  }