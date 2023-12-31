import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";
import languagesData from "../LanguegesData";
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
          <img src="\src\images\emoji_button_tiny.webp" alt="Emoji Keyboard" />
        </button>
      )}
    </div>
  );
}

export default KeyBoardLanguage;
