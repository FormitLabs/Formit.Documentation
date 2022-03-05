import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/Добро пожаловать/Как начать">
//             ПЕРЕЙТИ К РЕСУРСАМ
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

//className={clsx('hero hero--primary', styles.heroBanner)} "button button--secondary button--lg"
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
        <div className={styles["rectangle"]}></div>
        <img src="/img/video.png"></img>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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
