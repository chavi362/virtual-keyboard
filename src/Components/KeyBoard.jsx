import { useEffect } from 'react';
import './KeyBoardStylee.css';
import { addButtonColor } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function KeyBoard(props) {
    const dispatch = useDispatch();
    const buttonColors = useSelector(state => state.buttonColors);

    let isCapslock = props.isCapslock;
    const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const hebrewArr = [
        "/", "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",
        "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", ".",
        "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", ","
    ];
    const arabicArr = [
        'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح',
        'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م',
        'ك', 'ط', 'ئ', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و'
    ];
    const englishArr = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '.',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
    ];

    const ukranianArr = [
        'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї',
        'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є',
        'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
    ];
    const russianArr = [
        'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
        'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
        'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
    ];

    const portugueseArr = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', ';',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
    ];

    const spanishArr = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', ',', 'ç',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
    ];

    const macedonianArr = [
        'љ','њ','е','р','т','ѕ','у','и','о','п','ш','ѓ',
        'а','с','д','ф','г','х','ј','к','л','ч','ќ','ж',
        'з','џ','ц','в','б','н','м',',','.',
    ];
    const turkıshArr = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', "ı", 'o', 'p',"ğ","ü",
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ş', "i",';',
        'z', 'x', 'c', 'v', 'b', 'n', 'm',"ö","ç", ',', '.'
    ];

    let keyboardArr;
    const capslockArr = [...numbersArr, ...englishArr.map(char => char.toUpperCase())];
    switch (props.language) {
        case "hebrew":
            keyboardArr = [...numbersArr, ...hebrewArr];
            break;
        case "english":
            keyboardArr = [...numbersArr, ...englishArr];
            break;
        case "arabic":
            keyboardArr = [...numbersArr, ...arabicArr];
            break;
        case "ukranian":
            keyboardArr = [...numbersArr, ...ukranianArr];
            break;
        case "russian":
            keyboardArr = [...numbersArr, ...russianArr];
            break;
        case "portuguese":
            keyboardArr = [...numbersArr, ...portugueseArr];
            break;
        case "spanish":
            keyboardArr = [...numbersArr, ...spanishArr];
            break;
        case "macedonian":
            keyboardArr = [...numbersArr, ...macedonianArr];
            break;
            case "turkısh":
            keyboardArr = [...numbersArr, ...turkıshArr];
            break;
        default:
            keyboardArr = [];
    }

    keyboardArr = (isCapslock ? capslockArr : keyboardArr);
    function toggleCapsLock() {
        props.setIsCapslock(!isCapslock);
    }

    function toggleCapsLock() {
        props.setIsCapslock(!isCapslock);
    }

    useEffect(() => {
        dispatch(addButtonColor(Array(keyboardArr.length).fill('')));
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
