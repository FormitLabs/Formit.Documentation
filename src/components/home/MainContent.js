import styles from "./MainContent.module.css";
import React from "react";
import Features from "./Features";
import Communities from "./Communities";

export default function MainContent() {
  return (
    <section className={styles.section}>
      <Features />
      <Communities />
    </section>
  );
}
