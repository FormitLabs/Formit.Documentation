import React from "react";
import styles from "./RadialGradientsBg.module.css";

export default function RadialGradientsBg() {
  return (
    <div className={styles.container}>
      <div className={styles["top-left-gradient"]} />
      <div className={styles["top-center-gradient"]} />
      <div className={styles["bottom-right-gradient"]} />
    </div>
  );
}
