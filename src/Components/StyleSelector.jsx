import { useState } from 'react';
import styled from 'styled-components';
import { FaUnderline } from 'react-icons/fa';
import './KeyBoardStylee.css';
import { useRef } from 'react';

const FontOption = styled.option`
        font-family: ${(props) => props.fontFamily};
    `;
    
function StyleSelector(props) {
    const changeAllStyleRef = useRef(false)
    const { changeAllTextStyle, currentStyle, onSelectStyle, upperAll, lowerAll } = props;

    const handleToggleChangeAllStyle = () => {
        changeAllStyleRef.current = !changeAllStyleRef.current;
    }

    const handleColorChange = (newColor) => {
        if (changeAllStyleRef.current)
        {
            let styleToChange={
                ...currentStyle,
                color: newColor,
            }
            changeAllTextStyle(styleToChange);
        } 
        else{
            onSelectStyle({
                ...currentStyle,
                color: newColor,
            });
        }
    };

    const handleFontSizeChange = (newFontSize) => {
        if (changeAllStyleRef.current)
        {
            let styleToChange={
                ...currentStyle,
                fontSize: newFontSize,
            }
            changeAllTextStyle(styleToChange);
        }
        else{
            onSelectStyle({
                ...currentStyle,
                fontSize: newFontSize,
            });
        } 
    };

    const handleFontFamilyChange = (newFontFamily) => {
        if (changeAllStyleRef.current)
        {
            let styleToChange={
                ...currentStyle,
                fontFamily: newFontFamily,
            }
            changeAllTextStyle(styleToChange);
        }
        else{
            onSelectStyle({
                ...currentStyle,
                fontFamily: newFontFamily,
            });
        } 
    };

    const handleTextDecorationChange = () => {
        if (changeAllStyleRef.current)
        {
            let styleToChange={
                ...currentStyle,
                textDecoration: currentStyle.textDecoration === 'none' ? 'underline' : 'none'
            }
            changeAllTextStyle(styleToChange);
        }
        else{
            onSelectStyle({
                ...currentStyle,
                textDecoration: currentStyle.textDecoration === 'none' ? 'underline' : 'none'
            });
        } 
    };

    

    return (
        <>
        <div className="style-selector-container">
            <button  onClick={lowerAll}>LOWER ALL</button>
            <button onClick={upperAll}>UPPER ALL</button>

            <div>
                <button  onClick={handleTextDecorationChange} className={`${currentStyle.textDecoration==='underline' ? 'active' : ''}`} >
                    <FaUnderline />
                </button>
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
                <label>Color:</label>
                {/* <input type="color" id="colorInput" value={currentStyle.color} onChange={(e) => handleColorChange(e.target.value)} /> */}
                <input type="color" id="colorInput" value="#000000" onChange={(e) => handleColorChange(e.target.value)} />

            </div>
            
        </div>
        <button onClick={handleToggleChangeAllStyle} className={`${ changeAllStyleRef.current ? 'active' : ''}`}>change all text's style</button>
       </>
    );
}

export default StyleSelector;