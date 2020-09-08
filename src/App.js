import React, { useState } from "react";
import Card from "./components/card/card";
import "./styles.css";

export default function App() {
  const wordCount = 4;
  const [words, setWords] = useState(generateWords(wordCount));
  return (
    <div className="App">
      <h1>React Memory</h1>
      <div className="cards">
        {words.map((x) => (
          <Card word={x.text} meaning={x.meaning} />
        ))}
      </div>
    </div>
  );

  function generateWords(count) {
    const words = require("./words.json");

    // shuffle words
    for (let i = words.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const tempWord = words[i];
      words[i] = words[randomIndex];
      words[randomIndex] = tempWord;
    }

    return words.slice(0, count);
  }
}
