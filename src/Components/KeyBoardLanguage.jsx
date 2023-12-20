import { FaKeyboard } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/actions';
import './KeyBoardStylee.css';

function KeyBoardLanguage(props) {
    const dispatch = useDispatch();
    // const setLanguage = props.setLanguage;
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        switch (selectedLanguage) {
            case "hebrew":
                dispatch(setLanguage("hebrew"));
                break;
            case "arabic":
                let text = "אשר שאתה שונא בדם ליבך את חמאס!!!";
                if (window.confirm(text) === true) {
                    dispatch(setLanguage("arabic"));
                } else {
                    alert("!אין לך זכות להשתמש במקלדת");
                    dispatch(setLanguage("hebrew"));
                }
                break;
            case "english":
                dispatch(setLanguage("english"));
                break;
            case "russian":
                dispatch(setLanguage("russian"));
                break;
            case "ukranian":
                dispatch(setLanguage("ukranian"));
                break;
            case "portuguese":
                dispatch(setLanguage("portuguese"));
                break;
            case "spanish":
                dispatch(setLanguage("spanish"));
                break;
            case "macedonian":
                dispatch(setLanguage("macedonian"));
                break;
            default:
                dispatch(setLanguage([]));
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
                <FaKeyboard className="icon" id="kyboard-icon" onClick={props.changeState} />
            ) : (
                <button className='icon' onClick={props.changeState}>
                    <img src="\src\images\emoji_button_tiny.webp" alt="Emoji Keyboard" />
                </button>
            )}
        </div>
    );
}

export default KeyBoardLanguage;
