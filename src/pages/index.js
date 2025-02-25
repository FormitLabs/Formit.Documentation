import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import MainContent from "../components/home/MainContent";
import Header from "../components/home/Header";
import RadialGradientsBg from "../components/home/RadialGradientsBg";
import DotPatternsBg from "../components/home/DotPatternsBg";

// TODO: вся стилизация документации сделана некорректно.
//  1) Вынести все захардкоженные цвета в `custom.css`
//  2) Переехать на scss
//  3) Обратиться к этой ссылке для грамотной работы с цветами и упрощения переопределяющих друг друга css стилей:
//  https://docusaurus.io/docs/styling-layout

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Библиотека знаний"
      description="Руководство по работе с Formit - программным комплексом для расчета инсоляции и КЕО"
      wrapperClassName={styles.wrapper}
    >
      <DotPatternsBg />
      <div className={styles.content}>
        <RadialGradientsBg />
        <Header />
        <MainContent />
      </div>
    </Layout>
  );
}
