import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import RenderFixedElements from '../components/RenderFixedElements';

// FIXME: вся стилизация документации сделана некорректно.
//  Обратиться к этой ссылке для грамотной работы с цветами и упрощения переопределяющих друг друга css стилей:
//  https://docusaurus.io/docs/styling-layout

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Библиотека знаний"
      description="Руководство по работе с Formit - программным комплексом для расчета инсоляции и КЕО">
      <div className={styles.layout}>
        <RenderFixedElements />
        <HomepageHeader />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}
