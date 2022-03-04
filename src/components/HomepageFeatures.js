import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const informationCards = [
  {
    src: '/img/docIcon.svg',
    title: 'Ознакомьтесь с нашей документацией',
    description: (
      <>
        Здесь вы найдете инструкцию по использованию сервиса, 
        руководство пользователя и методические указания
      </>
    ),
  },
  {
    src: '/img/targetIcon.svg',
    title: 'Найдите ответы на все вопросы',
    description: (
      <>
        Мы подготовили для Вас ответы на самые часто задаваемы вопросы
      </>
    ),
  },
  {
    src: '/img/bulbIcon.svg',
    title: 'Следите за обновлениями',
    description: (
      <>
        Все изменения в сервисе будут представлены в разделе “Что нового?”
      </>
    ),
  },
];

const CommunityList = [
  {
    src: '/img/tgIcon.svg',
    description: (
      <>
        Мы активно развиваем сообщество AltecInsolations в <span className="selected-text">Telegram</span>-канале.
        Подписывайтесь, чтобы ничего не пропустить!
      </>
    )
  },
];

function RenderInformationCards({src, title, description}) {
  return (
    <div className={styles["info-container"]}>
      <img src={src} alt=''></img>
      <h3 className={styles["info-title"]}>{title}</h3>
      <p className={styles["info-description"]}>{description}</p>
    </div>
  );
}

function Community({src, description}) {
  return (
    <div className={styles["community-container"]}>
      <img src={src} alt=''></img>
      <p className={styles["community-description"]}>{description}</p>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles["section-block"]}>
      <div className={styles.features}>
        {informationCards.map((props, idx) => (
          <RenderInformationCards key={idx} {...props} />
        ))}
      </div>
      <div className={styles.communities}>
        {CommunityList.map((props, idx) => (
          <Community key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}