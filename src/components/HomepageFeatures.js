import React from 'react';
import styles from './HomepageFeatures.module.css';
import RenderInformationCards from './RenderInformationCards';
import RenderCommunities from './RenderCommunities';


export default function HomepageFeatures() {
  return (
    <section className={styles["section-block"]}>
      <RenderInformationCards />
      <RenderCommunities />
    </section>
  );
}