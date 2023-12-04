import React, { useState } from 'react';
import './KeyBoardStylee.css'

function KeyBoard(props) {
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
        default:
            keyboardArr = [];
    }
    keyboardArr = (isCapslock ? capslockArr : keyboardArr);
    function toggleCapsLock() {
        props.setIsCapslock(!isCapslock);
    }
    return (
        <div id="keyBoardK">
            <div id="letters-row" className="letters-row">
                {keyboardArr.map((char, index) => (
                    <div className='k_b' key={index}>
                        <button onClick={() => props.handleButtonClick(char)}>
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
