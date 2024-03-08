export const useStyleSelector = (
    currentStyle,
    changeAllTextStyle,
    onSelectStyle,
    changeAllStyle,
    changeAllStyleParam
) => {

    const changeStyle = (styleToChange, changeAllStyle) => {
        if (changeAllStyle) {
            changeAllTextStyle(styleToChange);
        } else {
            onSelectStyle(styleToChange);
        }
    }

    const handleChangeStyle = (e, changeAllStyle) => {
        const styleToChange = {
            ...currentStyle,
            [e.target.name]: e.target.value,
        };
        changeStyle(styleToChange, changeAllStyle);
    };

    const handleChangeTextDecoration = () => {
        const styleToChange = {
            ...currentStyle,
            textDecoration:
                currentStyle.textDecoration === "none" ? "underline" : "none",
        };
        changeStyle(styleToChange, changeAllStyle);
    }

    const handleTextAlignmentChange = (newAlignment) => {
        const styleToChange = {
            ...currentStyle,
            textAlign: newAlignment,
        };
        changeStyle(styleToChange, changeAllStyle);
        const textArea = document.querySelector(".DivTextArea");
        if (textArea) {
            textArea.style.textAlign = newAlignment;
        }
    }

    const handleToggleChangeAllStyle = () => {
        changeAllStyleParam(prevValue => !prevValue);
    };

    const handleFontSizeChange = (increment) => {
        const newFontSize = Math.max(
            1,
            parseInt(currentStyle.fontSize, 10) + increment
        );
        const styleToChange = {
            ...currentStyle,
            fontSize: `${newFontSize}px`,
        };
        changeStyle(styleToChange, changeAllStyle);
    };

    return {
        handleChangeStyle,
        handleChangeTextDecoration,
        handleTextAlignmentChange,
        handleToggleChangeAllStyle,
        handleFontSizeChange
    };
}