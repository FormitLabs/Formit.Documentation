import SmallDotPattern from "/img/smallDotPattern.svg";
import LargeDotPattern from "/img/largeDotPattern.svg";
import styles from "./DotPatterns.module.css";
import React from "react";

export default function DotPatterns() {
  return (
    <div className={styles.container}>
      <SmallDotPattern className={styles["top-left-pattern"]} />
      <LargeDotPattern className={styles["bottom-right-pattern"]} />
    </div>
  );
}
