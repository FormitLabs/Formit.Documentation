import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import RenderFixedElements from '../components/RenderFixedElements';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.layout}>
        <RenderFixedElements />
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
