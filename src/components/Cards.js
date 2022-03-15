import React, { useState } from 'react';
import styles from './Cards.module.css';

function Cards() {
    const [cards, setCards] = useState({ 
      first: styles["left-card"],
      second: styles["mid-card"],
      third: styles["right-card"],
    });
  
    const [currentCard, setCurrentCard] = useState("second");
  
    function toggleClass(nameCard) {
      let style = cards[nameCard];
      cards[nameCard] = cards[currentCard];
      cards[currentCard] = style;
      console.log(currentCard);
      setCurrentCard(nameCard);
      setCards({
        first: cards.first,
        second: cards.second,
        third: cards.third,
      });
    };
  
    return (
      <div className={styles["cards"]}>
        <div className={cards.first} onClick={() => toggleClass("first")} >123</div>
        <div className={cards.second} onClick={() => toggleClass("second")} >456</div>
        <div className={cards.third} onClick={() => toggleClass("third")} >789</div>
      </div>
    );
  }