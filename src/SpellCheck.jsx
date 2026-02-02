import React, { useState } from "react";

export default function SpellCheck(){

    const [text, setText] = useState(" ");
    const [suggestText, setSuggestText] = useState(" ");

    const handleSpellCheck=(e)=>{
        const inputText = e.target.value;
         setText(inputText);

         const words = inputText.split(" ");
         const correctWords = words.map((word)=>{
            const correctWord = customDictionary[word.toLowerCase()];
            return correctWord || word;
         });

    

         const firstCorrection = correctWords.find(
            (word, index)=> word !== words[index]
         );
         setSuggestText(firstCorrection || "");
    }

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

    return(
        <div>
        <h1>Spell Check and auto-Correction</h1>
        <textarea placeholder="Enter text..." onChange={handleSpellCheck} rows={5} cols={40}></textarea>

        {suggestText && (
            <p>Did you mean: <strong>{suggestText}</strong></p>
        )}
        </div>
    )
}