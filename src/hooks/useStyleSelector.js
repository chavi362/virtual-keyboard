import { useRef } from 'react';

const useStyleSelector = (props) => {
    const changeAllStyleRef = useRef(false);
    const { changeAllTextStyle, currentStyle, onSelectStyle } = props;

    const handleToggleChangeAllStyle = () => {
        changeAllStyleRef.current = !changeAllStyleRef.current;
    };

    const changeStyle = (styleToChange) => {
        if (changeAllStyleRef.current) {
            changeAllTextStyle(styleToChange);
        } else {
            onSelectStyle(styleToChange);
        }
    };

    const handleColorChange = (newColor) => {
        const styleToChange = {
            ...currentStyle,
            color: newColor,
        };
        changeStyle(styleToChange);
    };

    const handleFontSizeChange = (increment) => {
        const newFontSize = Math.max(1, parseInt(currentStyle.fontSize, 10) + increment);
        const styleToChange = {
            ...currentStyle,
            fontSize: `${newFontSize}px`,
        };
        changeStyle(styleToChange);
    };

    const handleFontFamilyChange = (newFontFamily) => {
        const styleToChange = {
            ...currentStyle,
            fontFamily: newFontFamily,
        };
        changeStyle(styleToChange);
    };

    const handleTextDecorationChange = () => {
        const styleToChange = {
            ...currentStyle,
            textDecoration: currentStyle.textDecoration === 'none' ? 'underline' : 'none',
        };
        changeStyle(styleToChange);
    };

    return {
        changeAllStyleRef,
        handleToggleChangeAllStyle,
        handleColorChange,
        handleFontSizeChange,
        handleFontFamilyChange,
        handleTextDecorationChange,
    };
};

export default useStyleSelector;