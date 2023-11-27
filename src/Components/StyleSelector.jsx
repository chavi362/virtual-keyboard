import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUnderline } from 'react-icons/fa';
import './KeyBoardStylee.css';

function StyleSelector(props) {
    const [changeAllStyle, setChangeAllStyle] = useState(false);
    const {  changeAllTextStyle, currentStyle, onSelectStyle, upperAll, lowerAll } = props;
    const handleColorChange = (newColor) => {
        onSelectStyle({
            ...currentStyle,
            color: newColor,
        });
        if (changeAllStyle)
        changeAllTextStyle();
    };
    const handleFontSizeChange = (newFontSize) => {
        onSelectStyle({
            ...currentStyle,
            fontSize: newFontSize,
        });
        if (changeAllStyle)
        changeAllTextStyle();
    };

    const handleFontFamilyChange = (newFontFamily) => {
        onSelectStyle({
            ...currentStyle,
            fontFamily: newFontFamily,
        });
        if (changeAllStyle)
        changeAllTextStyle();
    };

    const handleTextDecorationChange = () => {
        onSelectStyle({
            ...currentStyle,
            textDecoration: currentStyle.textDecoration === 'none' ? 'underline' : 'none'
        });
        if (changeAllStyle)
        changeAllTextStyle();
    };


    const FontOption = styled.option`
        font-family: ${(props) => props.fontFamily};
    `;

    return (
        <div className="style-selector-container">
            <div>
                <label>Color:</label>
                <input type="color" id="colorInput" value={currentStyle.color} onChange={(e) => handleColorChange(e.target.value)} />
            </div>
            <div>
                <label>Font Size:</label>
                <input type="input" value={currentStyle.fontSize} onChange={(e) => handleFontSizeChange(e.target.value)} />
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
                <button id="underline" onClick={handleTextDecorationChange} className={`${currentStyle.textDecoration==='underline' ? 'active' : ''}`} >
                    <FaUnderline />
                </button>
            </div>
            <button id='upper-all' onClick={upperAll}>UPPER ALL</button>
            <button id='lower-all' onClick={lowerAll}>LOWER ALL</button>
            <div>
            <button onClick={() => setChangeAllStyle(!changeAllStyle)} className={`${changeAllStyle ? 'active' : ''}`}>change all text's style</button>
            </div>
        </div>
    );
}
export default StyleSelector;
