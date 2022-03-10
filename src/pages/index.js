import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.layout}>
        <div className={styles["ellipse-left"]}></div>
        <div className={styles["ellipse-top"]}></div>
        <div className={styles["ellipse-right-owner"]}>
          <div className={styles["ellipse-right"]}></div>
          <img src="/img/pointsBottom.svg" alt='' className={styles["points-bottom"]}></img>
        </div>
        <img src="/img/pointsTop.svg" alt='' className={styles["points-top"]}></img>

        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>

    </Layout>
  );
}
