import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";
import emojiButton from "../assets/images/emojiButton.webp";
import { useTranslation } from "react-i18next";

function KeyBoardLanguage(props) {
  const { i18n } = useTranslation();
  const setLanguage = props.setLanguage;

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);

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
        <option value="english">English</option>
        <option value="hebrew">עברית</option>
        <option value="arabic">عربيه</option>
        <option value="ukranian">українська</option>
        <option value="russian">русский</option>
        <option value="portuguese">Português</option>
        <option value="spanish">Español</option>
        <option value="macedonian">Македонски</option>
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
