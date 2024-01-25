import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";
import languagesData from "../LanguagesData";
import emojiButton from "../assets/images/emojiButton.webp";

import React, { useState } from 'react';

function KeyBoardLanguage(props) {
  const setLanguage = props.setLanguage;
  const handleChange = (event) =>  setLanguage(event.target.value);
  return (
    <div className='language-and-icons'>
      <select className='chooseLanguage' onChange={handleChange}>
        {languagesData.map((languege, index) => (
          <option key={index} value={languege.languageName}>
            {languege.translatedName}
          </option>
        ))}
      </select>
      {props.isEmojiActive ? (

        <button className="icon" onClick={props.changeState}>
          <FaKeyboard 
            size={50}
            alt='virtual Keyboard'
          />
        </button>
      ) : (
        <button className='icon' onClick={props.changeState}>
          <img src={emojiButton} alt='Emoji Keyboard' />
        </button>
      )}
    </div>
  );
}

export default KeyBoardLanguage;
