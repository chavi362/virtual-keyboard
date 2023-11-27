import React from 'react';
import styled from 'styled-components';
import { FaUnderline } from 'react-icons/fa';
import './KeyBoardStylee.css'


function StyleSelector(props) {
    const { currentStyle, onSelectStyle } = props;

    const handleColorChange = (newColor) => {
        onSelectStyle({
            ...currentStyle,
            color: newColor,
        });
    };

    const handleFontSizeChange = (newFontSize) => {
        onSelectStyle({
            ...currentStyle,
            fontSize: newFontSize,
        });
    };

    const handleFontFamilyChange = (newFontFamily) => {
        onSelectStyle({
            ...currentStyle,
            fontFamily: newFontFamily,
        });
    };

    const handleTextDecorationChange = () => {
        onSelectStyle({
            ...currentStyle,
            textDecoration: currentStyle.textDecoration === 'none' ? 'underline' : 'none'
        });
    };

    const FontOption = styled.option`
        font-family: ${(props) => props.fontFamily};
    `;

    return (
        <div>
            <div>
                <label>Color:</label>
                <input type="color" value={currentStyle.color} onChange={(e) => handleColorChange(e.target.value)} />
            </div>
            <div>
                <label>Font Size:</label>
                <input type="input" value={currentStyle.fontSize} onChange={(e) => handleFontSizeChange(e.target.value) }  />
            </div>

            <div>
                <label>Font Family:</label>
                <select value={currentStyle.fontFamily} onChange={(e) => handleFontFamilyChange(e.target.value)}>
                    <FontOption fontFamily="Arial">Arial</FontOption>
                    <FontOption fontFamily="Times New Roman">Times New Roman</FontOption>
                    <FontOption fontFamily="Verdana">Verdana</FontOption>
                    <FontOption fontFamily="Courier New">Courier New</FontOption>
                    <FontOption fontFamily="Georgia">Georgia</FontOption>
                    <FontOption fontFamily="Impact">Impact</FontOption>
                    <FontOption fontFamily="Comic Sans MS">Comic Sans MS</FontOption>
                    <FontOption fontFamily="Trebuchet MS">Trebuchet MS</FontOption>
                    <FontOption fontFamily="Palatino Linotype">Palatino Linotype</FontOption>
                    <FontOption fontFamily="Lucida Console">Lucida Console</FontOption>
                </select>
            </div>
            <div>
                <button id="underline" onClick={() => handleTextDecorationChange('underline')}>
                    <FaUnderline />
                </button>
            </div>
            <button id='upper-all'>UPPER ALL</button>
            <button id='lower-all'>LOWER ALL</button>
        </div>
    );
}

export default StyleSelector;