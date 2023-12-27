import { useEffect } from 'react';
import './KeyBoardStylee.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBtnColor } from '../redux/reducer';

function KeyBoard(props) {
    const dispatch = useDispatch();
    const buttonColors = useSelector(state => state.buttonColors);
    let keyboardArr=props.language.characters;
    const capslockArr =props.language.shiftCharacters;

    // switch (props.language) {
    //     case "hebrew":
    //         keyboardArr = [...numbersArr, ...hebrewArr];
    //         break;
    //     case "english":
    //         keyboardArr = [...numbersArr, ...englishArr];
    //         break;
    //     case "arabic":
    //         keyboardArr = [...numbersArr, ...arabicArr];
    //         break;
    //     case "ukranian":
    //         keyboardArr = [...numbersArr, ...ukranianArr];
    //         break;
    //     case "russian":
    //         keyboardArr = [...numbersArr, ...russianArr];
    //         break;
    //     case "portuguese":
    //         keyboardArr = [...numbersArr, ...portugueseArr];
    //         break;
    //     case "spanish":
    //         keyboardArr = [...numbersArr, ...spanishArr];
    //         break;
    //     case "macedonian":
    //         keyboardArr = [...numbersArr, ...macedonianArr];
    //         break;
    //     default:
    //         keyboardArr = [];
    // }

    keyboardArr = (isCapslock ? capslockArr : keyboardArr);
    function toggleCapsLock() {
        props.setIsCapslock(!isCapslock);
    }


    useEffect(() => {
        dispatch(addBtnColor(Array(keyboardArr.length).fill('')));
    }, []);

    return (
        <div id="keyBoardK">
            <div id="letters-row" className="letters-row">
                {keyboardArr.map((char, index) => (
                    <div className={`k_b`} key={index}>
                        <button
                            className={`${buttonColors[index]}`}
                            onClick={() => props.handleButtonClick(char, index)}>
                            {char}
                        </button>
                    </div>
                ))}
            </div>
            <div id="additional-buttons" className="keyboard-row">
                <button onClick={() => props.handleButtonClick('\n')} className="enter">
                    enter
                </button>
                <button onClick={() => props.handleButtonClick('\xa0')} className="space">
                    space
                </button>
                <button onClick={() => props.handleEvent('backspace')} className="backspace">
                    backspace
                </button>
                <button onClick={toggleCapsLock} className={`capslock ${isCapslock ? 'active' : ''}`}>
                    caps lock
                </button>
            </div>
        </div>
    );
}
export default KeyBoard;
