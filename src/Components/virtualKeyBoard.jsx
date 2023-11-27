import React, { useState } from 'react';
import KeyBoardLanguage from './KeyBoardLanguage';
import Screen from './Screen';
import SpecialButtons from './SpecialButtons';
import KeyBoard from './KeyBoard';
import LetterStyle from '../letterStyle';
import StyleSelector from './StyleSelector';
import './KeyBoardStylee.css'
import EmojiKeyBoard from './EmojiKeyBoard';

let redoStack = [];
function VirtualKeyBoard() {
    const [isEmojiActive, setIsEmojiActive] = useState(false);
    const placeholders = ['הקלד כאן..', 'type here', 'أكتب هنا'];
    const [placeholder, setPlaceHolder] = useState('הקלד כאן..');
    const [language, setLanguage] = useState("hebrew");
    const [currentStyle, setCurrentStyle] = useState(new LetterStyle());
    const [stack, setStack] = useState([[]]);
    const [isUndo, setIsUndo] = useState(stack.length === 0);
    const [isRedo, setIsRedo] = useState(stack.length === 0);
    const [isCapslock, setIsCapslock] = useState(false);
    const changeState = () => {
        setIsEmojiActive(!isEmojiActive);
    };
    function changeLanguage(language) {
        setLanguage(language);
        switch (language) {
            case "hebrew":
                setPlaceHolder(placeholders[0]);
                break;
            case "english":
                setPlaceHolder(placeholders[1]);
                break;
            case "arabic":
                setPlaceHolder(placeholders[2]);
                break;
            default:
                setPlaceHolder(placeholders[0]);
                break;
        }
    }
    function deleteLastChar() {
        setStack((prevStack) => {
            let newStack = [...prevStack];
            if (newStack.length !== 0) {
                let lastState = [...newStack[newStack.length - 1]];
                lastState.pop();;
                newStack.push(lastState);
                setIsUndo(stack.length);
            }
            return newStack;
        });
    }
    function changeAllText(itemFunction) {
        setStack((prevStack) => {
            if (prevStack.length > 0) {
                const lastItem = prevStack[prevStack.length - 1];
                const modifiedLastItem = lastItem.map((item) => ({
                    ...itemFunction(item), // Use spread operator here
                }));
                return [...prevStack, modifiedLastItem];
            }
            return prevStack;
        });
    }
    const upperChar = (item) => ({
        char: item.char.toUpperCase(),
        style: { ...item.style },
    });
    const lowerChar = (item) => ({
        char: item.char.toLowerCase(),
        style: { ...item.style },
    });
    const setOneStyle = (item) => ({
        char: item.char,
        style: { ...currentStyle },
    });
    const upperAll = () => changeAllText(upperChar);
    const lowerAll = () => changeAllText(lowerChar);

    const changeAllTextStyle=()=>changeAllText(setOneStyle);

    function handleInputButtonClick(char) {
        setStack((prevStack) => {
            let newStack = [...prevStack];
            if (newStack.length !== 0) {
                let lastState = [...newStack[newStack.length - 1]];
                lastState.push({ char: char, style: { ...currentStyle } });
                newStack.push(lastState);
            } else {
                newStack.push([{ char: char, style: { ...currentStyle } }]);
            }
            setIsUndo(stack.length);
            return newStack;
        });
    }
    function handleSelectStyle(newStyle) {
        setCurrentStyle(newStyle);
    }
    function undoPrev() {
        setStack((prevStack) => {
            const newStack = [...prevStack];
            redoStack.push(newStack.pop());
            setIsRedo(true)
            if (stack.length <= 2)
                setIsUndo(false);
            return newStack;
        });
    }
    function redo() {
        console.log(redoStack)
        setStack((prevStack) => {
            const newStack = [...prevStack];
            let lastItem = redoStack.pop();
            setIsRedo(redoStack.length != 0)
            newStack.push(lastItem);
            return newStack;
        });
    }
    function deleteAllClicked() {
        let text = "Press a button!\nEither OK or Cancel.";
        if (window.confirm(text) === true) {
            deleteAll();
        }
    }
    function deleteAll() {
        setStack((prevStack) => {
            let newStack = [...prevStack];
            if (newStack.length !== 0) {
                let lastState = [{ char: "", style: { ...currentStyle } }];
                newStack.push(lastState);
            }
            setIsUndo(stack.length);
            return newStack;
        });
    }
    const handleEvent = (event) => {
        switch (event) {
            case 'deleteAll':
                deleteAllClicked();
                break;
            case 'undo':
                undoPrev();
                break;
            case 'redo':
                redo();
                break;
            case 'backspace':
                deleteLastChar();
                break;
            default:
                break;
        }
    };
    return (
        <div className='virtual_keyBoard'>
            <div className='screenDiv'>
                <div className='change_layout'>
                    <KeyBoardLanguage setLanguage={changeLanguage} changeState={changeState} isEmojiActive={isEmojiActive} />
                </div>
                <Screen text={stack[stack.length - 1] || placeholder} />
                <SpecialButtons handleEvent={handleEvent} isUndo={isUndo} isRedo={isRedo} />
            </div>
            <div className="style-selector-container">
                <StyleSelector changeAllTextStyle={changeAllTextStyle} onSelectStyle={handleSelectStyle} currentStyle={currentStyle} upperAll={upperAll} lowerAll={lowerAll} />
            </div>
            <div className="keyboard-container">
                {isEmojiActive ? (
                    <EmojiKeyBoard handleInputButtonClick={handleInputButtonClick} />
                ) : (
                    <KeyBoard isCapslock={isCapslock} setIsCapslock={setIsCapslock} language={language} handleButtonClick={handleInputButtonClick} handleEvent={handleEvent} />
                )}
            </div>

        </div>
    );
}
export default VirtualKeyBoard;
