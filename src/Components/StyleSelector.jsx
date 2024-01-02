import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUnderline } from 'react-icons/fa';
import './KeyBoardStylee.css';
import { useRef } from 'react';

const FontOption = styled.option`
  font-family: ${(props) => props.fontFamily};
`;

function StyleSelector(props) {
  const changeAllStyleRef = useRef(false);
  const { changeAllTextStyle, currentStyle, onSelectStyle, upperAll, lowerAll } = props;

  const handleToggleChangeAllStyle = () => {
    changeAllStyleRef.current = !changeAllStyleRef.current;
  };

  const handleColorChange = (newColor) => {
    const styleToChange = {
      ...currentStyle,
      color: newColor,
    };
    changeStyle(styleToChange);
  };

  const changeStyle = (styleToChange) => {
    if (changeAllStyleRef.current) {
      changeAllTextStyle(styleToChange);
    } else {
      onSelectStyle(styleToChange);
    }
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

  return (
    <>
      <div className="style-selector-container">
        <button onClick={lowerAll}>LOWER ALL</button>
        <button onClick={upperAll}>UPPER ALL</button>

        <div>
          <button onClick={handleTextDecorationChange} className={`${currentStyle.textDecoration === 'underline' ? 'active' : ''}`}>
            <FaUnderline />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div style={{ marginRight: '20px' }}>
    <label>Font Size:</label>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={() => handleFontSizeChange(-1)} style={{ width: '25px' }}>-</button>
      <input
        type="text"
        value={currentStyle.fontSize}
        onChange={() => {}}
        style={{ marginLeft: '5px', marginRight: '5px', width: '50px' }}
      />
      <button onClick={() => handleFontSizeChange(+1)} style={{ width: '25px' }}>+</button>
    </div>
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
</div>
        <div>
          <label>Color:</label>
          <input type="color" id="colorInput" value="#000000" onChange={(e) => handleColorChange(e.target.value)} />
        </div>
      </div>

      <button onClick={handleToggleChangeAllStyle} className={`${changeAllStyleRef.current ? 'active' : ''}`}>
        change all text's style
      </button>
    </>
  );
}

export default StyleSelector;
