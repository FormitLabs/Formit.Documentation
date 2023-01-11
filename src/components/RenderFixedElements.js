import React from 'react';
import styles from './RenderFixedElements.module.css';

export default function RenderFixedElements() {
    return (
        <div className={styles["fixed-elements"]}>
            <div className={styles["ellipse-left"]}></div>
            <div className={styles["ellipse-top"]}></div>
            <div className={styles["ellipse-right"]}></div>
            <img src="/img/pointsBottom.svg" alt='Декоративные точки' className={styles["points-bottom"]}></img>
            <img src="/img/pointsTop.svg" alt='Декоративные точки' className={styles["points-top"]}></img>
        </div>
    );
}