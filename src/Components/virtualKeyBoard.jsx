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
        <div className='MainDiv'>
        <div className='virtual_keyBoard'>
            <div className='screenDiv'>
                <div className='change_layout'> <KeyBoardLanguage setLanguage={changeLanguage} changeState={changeState} isEmojiActive={isEmojiActive}/></div>
                <Screen text={stack[stack.length - 1] || placeholder} />
                <SpecialButtons handleEvent={handleEvent} isUndo={isUndo} isRedo={isRedo} />
            </div>
            <div className="keyboard-container">
                {isEmojiActive ? (
                    <EmojiKeyBoard handleInputButtonClick={handleInputButtonClick} />
                ) : (
                    <KeyBoard language={language} handleButtonClick={handleInputButtonClick} handleEvent={handleEvent} />
                )}
            </div>
            <StyleSelector onSelectStyle={handleSelectStyle} currentStyle={currentStyle} />
        </div>
        </div>
    );
}

export default VirtualKeyBoard;
