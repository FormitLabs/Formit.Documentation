import React from 'react';
import styles from './RenderCommunities.module.css';

const communityList = [
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
  
  function Community({src, description}) {
    return (
      <div className={styles["community-container"]}>
        <img src={src} alt=''></img>
        <p className={styles["community-description"]}>{description}</p>
      </div>
    );
  }

export default function RenderCommunities() {
    return (
        <div className={styles.communities}>
            {communityList.map((props, idx) => (
                <Community key={`community ${idx}`} {...props} />
            ))}
        </div>
    );
}