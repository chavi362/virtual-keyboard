import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";
import languagesData from "../LanguegesData";
import emojiButton from "../assets/images/emojiButton.webp";

import React, { useState } from 'react';

function KeyBoardLanguage(props) {
  const setLanguage = props.setLanguage;
  const handleChange = (event) =>  setLanguage(event.target.value);
  return (
    <div className="language-and-icons">
      <select className="chooseLanguage" onChange={handleChange}>
        {
          languagesData.map((languege,index)=>
          <option key ={index}value={languege.languageName}>{languege.translatedName}</option>
          )
        }
      </select>
      {props.isEmojiActive ? (
        <FaKeyboard
          className="icon"
          id="keyboard-icon"
          onClick={props.changeState}
        />
      ) : (
        <button className="icon" onClick={props.changeState}>
          <img src={emojiButton} alt="Emoji Keyboard" />
        </button>
      )}
    </div>
  );
}

export default KeyBoardLanguage;
