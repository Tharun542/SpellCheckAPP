import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function SpellCheckApp() {
  const [text, setText] = useState("");
  const [suggestText, setSuggestText] = useState("");

  const handleSpellCheck = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Handle empty input
    if (!inputText.trim()) {
      setSuggestText("");
      return;
    }

    const words = inputText.split(" ");

    // Find FIRST misspelled word and suggest correction
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestText(customDictionary[lowerWord]);
        return;
      }
    }

    // No spelling mistakes
    setSuggestText("");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        value={text}
        onChange={handleSpellCheck}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />

      {suggestText && (
        <p>
          Did you mean: <strong>{suggestText}</strong>?
        </p>
      )}
    </div>
  );
}
