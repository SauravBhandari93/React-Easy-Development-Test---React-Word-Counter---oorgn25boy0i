import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [size, setSize] = useState(16);
  const [limit, setLimit] = useState(50);
  const [countWord, setCountWords] = useState(0);
  const [countChar, setCountChar] = useState(0);
  return (
    <>
      <div id="main">
        <h3>Font size Picker</h3>
        <input
          id="fontSize-input"
          type="range"
          min="16"
          max="32"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <h3>Word limit input</h3>
        <input
          type="number"
          id="number"
          onChange={(e) => setLimit(e.target.value)}
        />
        <div>
          <textarea
            id="inputfield"
            rows="5"
            cols="40"
            maxLength={limit}
            onChange={(e) => {
              setCountChar(e.target.value.length);
              setCountWords(e.target.value.split(" ").length);
            }}
            style={{ fontSize: size + "px" }}
          />
        </div>
        <div>
          <div id="word-counter">Total Number of words written {countWord}</div>
          <div id="char-counter">
            Total number of characters used {countChar}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
