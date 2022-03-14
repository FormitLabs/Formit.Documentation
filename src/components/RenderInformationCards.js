import React from 'react';
import styles from './RenderInformationCards.module.css';
import InformationCard from './InformationCard';

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

export default function RenderInformationCards() {
    return (
        <div className={styles.features}>
            {informationCards.map((props, idx) => (
                <InformationCard key={`informationCard ${idx}`} {...props} />
            ))}
        </div>
    );
}