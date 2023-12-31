import { useState, useEffect, useReducer } from "react";
import KeyBoardLanguage from "./KeyBoardLanguage";
import Screen from "./Screen";
import SpecialButtons from "./SpecialButtons";
import KeyBoard from "./KeyBoard";
import LetterStyle from "../letterStyle";
import { getLanguage } from "../LanguegesData";
import StyleSelector from "./StyleSelector";
import "./KeyBoardStylee.css";
import EmojiKeyBoard from "./EmojiKeyBoard";
const intialLanguage = getLanguage("english");
const initialState = {
    languageName: intialLanguage.languageName,
    translatedName: intialLanguage.translatedName,
    characters: intialLanguage.characters,
    shiftCharacters: intialLanguage.shiftCharacters,
    placeholder: intialLanguage.placeholder,
    currentStyle: new LetterStyle(),
    stack: [[]],
    emojiActive: false,
    isUndo: false,
    isRedo: false,
    // isShift: false,
    redoStack: [],
};
const reducer = (state, action) => {
    let newStack = [...state.stack];
    switch (action.type) {
        case "changeLanguage":
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
        case "deleteLastChar":
            newStack[newStack.length - 1].pop();
            return {
                ...state,
                isUndo: true,
                stack: newStack,
            }
        case "changeAllText":
            const { itemFunction } = action;
            const lastItemIndex = state.stack.length - 1;
            if (lastItemIndex >= 0) {
                const lastItem = state.stack[lastItemIndex];
                const modifiedLastItem = lastItem.map((item) => ({
                    ...itemFunction(item),
                }));
                return {
                    ...state,
                    stack: [...state.stack, modifiedLastItem],
                    isUndo: true,
                };
            }
            return state;
        case "inputButtonClick":
            const char = action.char;
            if (newStack.length !== 0) {
                const lastState = [...newStack[newStack.length - 1]];
                lastState.push({ char: char, style: { ...state.currentStyle } });
                newStack.push(lastState);
            } else {
                newStack.push([{ char: char, style: { ...state.currentStyle } }]);
            }
            highlightClickedButtons(char);
            return {
                ...state,
                stack: newStack,
                isUndo: true,
            };
        case "toggleEmojiActive":
            return {
                ...state,
                emojiActive: !emojiActive
            }

        case "undoPrev":
            redoStack.push(newStack.pop());
            return {
                ...state,
                stack: newStack,
                isUndo: newStack.length >= 1,
                isRedo: true,
            };
        case "paste":
            navigator.clipboard.readText().then((text) => {
                if (text) {
                    const lastState = [...newStack[newStack.length - 1]];
                    text.split("").forEach((item) => lastState.push({ char: item, style: { ...currentStyle } }));
                    newStack.push(lastState);
                    return {
                        ...state,
                        stack: newStack,
                        isUndo: true,
                    }
                }
            })
            return state;
        case "deleteAll":
            if (newStack.length) {
                let lastState = [{ char: "", style: { ...currentStyle } }];
                newStack.push(lastState);
            }
            return {
                ...state,
                stack: newStack
            }
        case "redo":
            let lastItem = redoStack.pop();
            newStack.push(lastItem);
            return {
                ...state,
                isRedo: redoStack.length !== 0,
                stack: stack
            }
        case "updateCurrentStyle":
            return {
                ...state,
                currentStyle: action.newStyle,
            }

        default:
            return state;
    }
};
function VirtualKeyBoard() {
    const [isEmojiActive, setIsEmojiActive] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { language,characters, shiftCharacters,placeholder, currentStyle, stack, emojiActive, isUndo, isRedo, redoStack } = state;
    const [isShift, setisShift] = useState(false);
    const setCurrentStyle = (newStyle) => {
        dispatch({
            type: "updateCurrentStyle",
            newStyle: newStyle,
        });
    };

    const deleteAll = () => {
        dispatch({ type: "deleteAll" });
    };

    const paste = () => {
        dispatch({ type: "paste" })
    }

    const toggleEmojiActive = () => {
        dispatch({ type: "toggleEmojiActive" });
    };

    const deleteLastChar = () => {
        dispatch({ type: "deleteLastChar" });
    };
    const handleCopy = () =>
        dispatch({ type: "copy" });
    const changeAllText = (itemFunction) => {
        dispatch({
            type: "changeAllText",
            itemFunction: itemFunction,
        });
    };
function undoPrev() {
    dispatch(
        {
            type: "undoPrev"
        }
    )
}
function changeLanguage(language) {
    dispatch(
        {
            type: "changeLanguage",
            language: language
        }
    )
}
function handleInputButtonClick(char) {
    dispatch(
        {
            type: "inputButtonClick",
            char: char
        }
    )
}
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

function copy() {
    const text = stack[stack.length - 1].map((item) => item.char).join("");
    console.log(text)
    navigator.clipboard.writeText(text).then(() => {
    });
}
const handleEvent = (event) => {
    switch (event) {
        case "deleteAll":
            deleteAll();
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
            handleCopy();
            break;
        case "paste":
            paste();
            break;
        default:
            break;
    }
};

const highlightClickedButtons = (char) => {
    const buttons = document.querySelectorAll('.k_b button');
    buttons.forEach((button) => {
        if (button.textContent.toLowerCase() === char) {
            button.classList.add('highlighted');
            setTimeout(() => {
                button.classList.remove('highlighted');
            }, 250);
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
            highlightClickedButtons(char);
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
                    changeState={toggleEmojiActive}
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
                    charactersArr={isShift ? shiftCharacters : characters}
                    setisShift={setisShift}
                    language={language}
                    handleButtonClick={handleInputButtonClick}
                    handleEvent={handleEvent}
                    isShift={isShift}
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