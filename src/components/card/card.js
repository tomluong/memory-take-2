import React from "react";
import "./card.css";

export default function Card({ word, meaning }) {
  return (
    <div className="card">
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
