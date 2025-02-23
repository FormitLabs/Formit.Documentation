import styles from "./Features.module.css";
import React from "react";
import DocIcon from "/img/docIcon.svg";
import TargetIcon from "/img/targetIcon.svg";
import BulbIcon from "/img/bulbIcon.svg";

const features = [
  {
    Icon: DocIcon,
    title: "Ознакомьтесь с нашей документацией",
    description: (
      <>
        Здесь Вы найдете инструкцию по использованию сервиса, руководство
        пользователя и методические указания
      </>
    ),
  },
  {
    Icon: TargetIcon,
    title: "Найдите ответы на все вопросы",
    description: (
      <>Мы подготовили для Вас ответы на самые часто задаваемые вопросы</>
    ),
  },
  {
    Icon: BulbIcon,
    title: "Следите за обновлениями",
    description: (
      <>Все изменения в сервисе будут представлены в разделе “Что нового?”</>
    ),
  },
];

function FeatureCard({ Icon, title, description }) {
  return (
    <div className={styles["card"]}>
      <Icon className={styles["card-icon"]} />
      <h3 className={styles["card-title"]}>{title}</h3>
      <p className={styles["card-description"]}>{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className={styles.features}>
      {features.map((props, idx) => (
        <FeatureCard key={idx} {...props} />
      ))}
    </div>
  );
}
