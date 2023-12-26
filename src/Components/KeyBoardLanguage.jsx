import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";
import languagesData from "../LanguegesData";
function KeyBoardLanguage(props) {
  const setLanguage = props.setLanguage;
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    console.Consolelog(languegesData)
    switch (selectedLanguage) {
      case "hebrew":
        setLanguage("hebrew");
        break;
      case "arabic":
        setLanguage("arabic");
        break;
      case "english":
        setLanguage("english");
        break;
      case "russian":
        setLanguage("russian");
        break;
      case "ukranian":
        setLanguage("ukranian");
        break;
      case "portuguese":
        setLanguage("portuguese");
        break;
      case "spanish":
        setLanguage("spanish");
        break;
      case "macedonian":
        setLanguage("macedonian");
        break;
      default:
        setLanguage([]);
    }
  };
  return (
    <div className="language-and-icons">
      <select className="chooseLanguage" onChange={handleChange}>
        {
          languagesData.map((languege)=>
          <option value={languege.languageName}>{languege.translatedName}</option>
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
