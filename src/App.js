import React, { useState } from "react";
import Card from "./components/card/card";
import "./styles.css";

export default function App() {
  const wordCount = 6;
  const [words, setWords] = useState(generateWords(wordCount));

  const onClicked = (wordId) => {
    console.log(wordId);

    const _words = [...words];

    for (let i = 0; i < _words.length; i++) {
      if (_words[i].id === wordId) {
        _words[i].turned = true;
        break;
      }
    }

    setWords(_words);
  };
  return (
    <div className="App">
      <h1>React Memory</h1>
      <div className="cards">
        {words.map((x) => (
          <Card
            key={x.id}
            id={x.id}
            word={x.text}
            meaning={x.meaning}
            turned={x.turned}
            matched={x.matched}
            onClicked={onClicked}
          />
        ))}
      </div>
    </div>
  );

  function generateWords(count) {
    const words = require("./words.json");

    shuffleArray(words);

    // select the number of words
    const selectedWords = words.slice(0, count);

    // duplicate words
    const selectedWordsWithDuplicates = [...selectedWords, ...selectedWords];

    shuffleArray(selectedWordsWithDuplicates);

    return selectedWordsWithDuplicates.map((word, index) => {
      return Object.assign({ id: index, turned: false, matched: false }, word);
    });
  }

  function shuffleArray(array) {
    // shuffle words
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }
}
