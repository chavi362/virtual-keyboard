import { useState, useEffect, useRef, useReducer } from "react";
import KeyBoardLanguage from "./KeyBoardLanguage";
import Screen from "./Screen";
import SpecialButtons from "./SpecialButtons";
import KeyBoard from "./KeyBoard";
import LetterStyle from "../letterStyle";
import  { getLanguage } from  "../LanguegesData";
import StyleSelector from "./StyleSelector";
import "./KeyBoardStylee.css";
import EmojiKeyBoard from "./EmojiKeyBoard";
const intialLanguage = getLanguage("english");
// Define the initial state
const initialState = {
    languageName: intialLanguage.languageName,
    translatedName: "English",
    characters: [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '.',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
    ],
    shiftCharacters: [
        ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
    ],
    placeholder: "type here",
    currentStyle: new LetterStyle(),
    stack: [[]],
    isUndo: false,
    isRedo: false,
    isCapslock: false,
    redoStack: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "changeLanguage":
            // Retrieve the language data based on the selected language
            const newLanguage = getLanguage(action.language);
            // Update the state with the new language data
            return {
                ...state,
                languageName: newLanguage.languageName,
                translatedName: newLanguage.translatedName,
                characters: newLanguage.characters,
                shiftCharacters: newLanguage.shiftCharacters,
                placeholder: newLanguage.placeholder,
            };


        default:
            return state;
    }
};

function VirtualKeyBoard() {

    const [isEmojiActive, setIsEmojiActive] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [currentStyle, setCurrentStyle] = useState(new LetterStyle());
    const [stack, setStack] = useState([[]]);
    const [isUndo, setIsUndo] = useState(stack.length === 0);
    const [isRedo, setIsRedo] = useState(stack.length === 0);
    const [isCapslock, setIsCapslock] = useState(false);
    const redoStackRef = useRef([]);
    const redoStack = redoStackRef.current;

    const changeState = () => {
        setIsEmojiActive(!isEmojiActive);
    };
  

    function deleteLastChar() {
        dispatch({ type: "deleteLastChar" });
    }

    function changeAllText(itemFunction) {
        dispatch({
            type: "changeAllText",
            itemFunction: itemFunction,
        });
    }

    function changeLanguage(language) {
       dispatch(
        {
            type:"changeLanguage",
            language:language
        }
       )
    }
    // function deleteLastChar() {
    //     setStack((prevStack) => {
    //         if (prevStack.length !== 0) {
    //             let newStack = [...prevStack];
    //             let lastState = newStack[newStack.length - 1];
    //             lastState.pop();
    //             setIsUndo(true);
    //             return newStack;
    //         } else {

    //             return prevStack;
    //         }
    //     });
    // }
    // function changeAllText(itemFunction) {
    //     setStack((prevStack) => {
    //         if (prevStack.length > 0) {
    //             const lastItem = prevStack[prevStack.length - 1];
    //             const modifiedLastItem = lastItem.map((item) => ({
    //                 ...itemFunction(item),
    //             }));
    //             return [...prevStack, modifiedLastItem];
    //         }
    //         return prevStack;
    //     });
    // }
    const upperChar = (item) => ({
        char: item.char.toUpperCase(),
        style: { ...item.style },
    });
    const lowerChar = (item) => ({
        char: item.char.toLowerCase(),
        style: { ...item.style },
    });

    const upperAll = () => changeAllText(upperChar);
    const lowerAll = () => changeAllText(lowerChar);
    function changeAllTextStyle(styleToChange) {
        const setOneStyle = (item) => ({
            char: item.char,
            style: { ...styleToChange },
        });
        changeAllText(setOneStyle);
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
            setIsUndo(true);

            highlightRelatedButtons(char);

            return newStack;
        });
    }

    function undoPrev() {
        setStack((prevStack) => {
            const newStack = [...prevStack];
            redoStack.push(newStack.pop());
            setIsRedo(true);
            if (stack.length <= 2) setIsUndo(false);
            return newStack;
        });
    }
    function redo() {
        console.log(redoStack);
        setStack((prevStack) => {
            const newStack = [...prevStack];
            let lastItem = redoStack.pop();
            setIsRedo(redoStack.length !== 0);
            newStack.push(lastItem);
            setIsUndo(true);
            return newStack;
        });
    }
    function deleteAllClicked() {
        deleteAll();
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

    function copy() {
        const text = stack[stack.length - 1].map((item) => item.char).join("");
        console.log(text)
        navigator.clipboard.writeText(text).then(() => {

        });
    }

    function paste() {
        navigator.clipboard.readText().then((text) => {
            if (!text) return false;
            setStack((prevStack) => {
                const newStack = [...prevStack];
                const lastState = [...newStack[newStack.length - 1]];
                text.split("").forEach((item) => lastState.push({ char: item, style: { ...currentStyle } }));
                newStack.push(lastState);
                return newStack;
            })
        });
    }

    const handleEvent = (event) => {
        switch (event) {
            case "deleteAll":
                deleteAllClicked();
                break;
            case "undo":
                undoPrev();
                break;
            case "redo":
                redo();
                break;
            case "backspace":
                deleteLastChar();
                break;
            case "copy":
                copy();
                break;
            case "paste":
                paste();
                break;
            default:
                break;
        }
    };

    const highlightRelatedButtons = (char) => {
        const buttons = document.querySelectorAll('.k_b button');
        buttons.forEach((button, index) => {
            if (button.textContent.toLowerCase() === char) {
                button.classList.add('highlighted');
                setTimeout(() => {
                    button.classList.remove('highlighted');
                }, 300);
            }
        });
    };


    useEffect(() => {
        const handleKeyDown = (event) => {

            const isAlphanumeric =
                (event.keyCode >= 48 && event.keyCode <= 90) ||
                (event.keyCode >= 96 && event.keyCode <= 105) ||
                event.keyCode === 32 || // space
                event.keyCode === 13 ||// enter
                event.keyCode === 8; // backspace

            if (isAlphanumeric) {
                let char;
                if (event.keyCode === 32) {
                    char = '\xa0';

                    const spaces = document.querySelectorAll('.space');

                    spaces.forEach((space) => {
                        space.classList.add('highlighted');
                        setTimeout(() => {
                            space.classList.remove('highlighted');
                        }, 300);
                    });

                } else if (event.keyCode === 8) {
                    handleEvent('backspace');
                    const backspaces = document.querySelectorAll('.backspace');
                    backspaces.forEach((backspace) => {
                        backspace.classList.add('highlighted');
                        setTimeout(() => {
                            backspace.classList.remove('highlighted');
                        }, 300);
                    });


                } else if (event.keyCode === 13) {
                    char = '\n'; // enter

                    const enters = document.querySelectorAll('.enter');

                    enters.forEach((enter) => {
                        enter.classList.add('highlighted');
                        setTimeout(() => {
                            enter.classList.remove('highlighted');
                        }, 300);
                    });

                } else {
                    char = String.fromCharCode(event.keyCode).toLowerCase();
                }

                handleInputButtonClick(char);
                highlightRelatedButtons(char);
            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleEvent]);
    return (
        <div className="virtual_keyBoard">
            <div className="screenDiv">
                <div className="change_layout">
                    <KeyBoardLanguage
                        setLanguage={changeLanguage}
                        changeState={changeState}
                        isEmojiActive={isEmojiActive}
                    />
                </div>
                <Screen
                    text={
                        stack.length && stack[stack.length - 1].length
                            ? stack[stack.length - 1]
                            : placeholder
                    }
                />

                <SpecialButtons
                    handleEvent={handleEvent}
                    isUndo={isUndo}
                    isRedo={isRedo}
                />
            </div>

            <div className="keyboard-container">
                {isEmojiActive ? (
                    <EmojiKeyBoard handleInputButtonClick={handleInputButtonClick} />
                ) : (
                    <KeyBoard
                        isCapslock={isCapslock}
                        setIsCapslock={setIsCapslock}
                        language={language}
                        handleButtonClick={handleInputButtonClick}
                        handleEvent={handleEvent}
                    />
                )}
            </div>
            <div className="style-selector-container">
                <StyleSelector
                    changeAllTextStyle={changeAllTextStyle}
                    onSelectStyle={setCurrentStyle}
                    currentStyle={currentStyle}
                    upperAll={upperAll}
                    lowerAll={lowerAll}
                />
            </div>
        </div>
    );
}
export default VirtualKeyBoard;
