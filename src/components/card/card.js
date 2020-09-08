import React from "react";
import "./card.css";

export default function Card({ id, word, meaning, turned, onClicked }) {
  const clicked = () => {
    onClicked(id);
  };

  return (
    <div className={turned ? "card turned" : "card"} onClick={clicked}>
      <div className="card-body">
        <div className="card-front">
          <div className="word">{word}</div>
          <div className="meaning">{meaning}</div>
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}
