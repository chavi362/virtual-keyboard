import React, { useState } from "react";
import styled from "styled-components";
import { FaUnderline } from "react-icons/fa";
import "./KeyBoardStylee.css";
import { useStyleSelector } from "../hooks/useStyleSelector";


const FontOption = styled.option`
  font-family: ${(props) => props.fontFamily};
`;

function StyleSelector(props) {
    const [changeAllStyle, setChangeAllStyle] = useState(false);
    const {
        changeAllTextStyle,
        currentStyle,
        onSelectStyle,
        upperAll,
        lowerAll,
    } = props;


    const { 
        handleChangeStyle, 
        handleChangeTextDecoration,
        handleTextAlignmentChange,
        handleToggleChangeAllStyle,
        handleFontSizeChange
    } = useStyleSelector(
        currentStyle,
        changeAllTextStyle,
        onSelectStyle,
        changeAllStyle
    );

    return (
        <div className='d-flex flex-column style-selector-container'>
            <div
                className='d-flex align-items-center justify-center row style-selector'
                style={{ marginTop: 0 }}
            >
                <button onClick={lowerAll} className='size-xl'>
                    LOWER ALL
                </button>
                <button onClick={upperAll} className='size-xl'>
                    UPPER ALL
                </button>
                <button
                    onClick={handleChangeTextDecoration}
                    className={`size-xl ${currentStyle.textDecoration === 'underline' ? 'active' : ''
                        }`}
                >
                    <FaUnderline />
                </button>
            </div>

            <div
                className='row style-selector d-flex flex-row justify-center'
                style={{ alignItems: 'end' }}
            >
                <div>
                    <label>Font Size:</label>
                    <div className='d-flex' style={{ alignItems: 'flex-end' }}>
                        <button
                            onClick={() => handleFontSizeChange(-1)}
                            style={{ width: '22px', marginBottom: '0px' }}
                        >
                            -
                        </button>
                        <input
                            type='text'
                            value={currentStyle.fontSize}
                            onChange={() => { }}
                            style={{ marginLeft: '5px', marginRight: '5px', width: '40px' }}
                        />
                        <button
                            onClick={() => handleFontSizeChange(+1)}
                            style={{ width: '22px', marginBottom: '0px' }}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <label>Font Family:</label>
                    <select
                        value={currentStyle.fontFamily}
                        name='fontFamily'
                        onChange={handleChangeStyle}
                    >
                        <FontOption fontFamily='Arial'>Arial</FontOption>
                        <FontOption fontFamily='Times New Roman'>
                            Times New Roman
                        </FontOption>
                        <FontOption fontFamily='Verdana'>Verdana</FontOption>
                        <FontOption fontFamily='Courier New'>Courier New</FontOption>
                        <FontOption fontFamily='Georgia'>Georgia</FontOption>
                        <FontOption fontFamily='Impact'>Impact</FontOption>
                        <FontOption fontFamily='Comic Sans MS'>Comic Sans MS</FontOption>
                        <FontOption fontFamily='Trebuchet MS'>Trebuchet MS</FontOption>
                        <FontOption fontFamily='Palatino Linotype'>
                            Palatino Linotype
                        </FontOption>
                        <FontOption fontFamily='Lucida Console'>Lucida Console</FontOption>
                    </select>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <label style={{ whiteSpace: 'nowrap' }}>Text-Align:</label>
                    <select
                        value={currentStyle.textAlign}
                        onChange={(e) => handleTextAlignmentChange(e.target.value)}
                    >
                        <option value='center'>Center</option>
                        <option value='left'>Left</option>
                        <option value='right'>Right</option>
                    </select>
                </div>

                <div>
                    <label>Color:</label>
                    <input
                        type='color'
                        id='colorInput'
                        value={currentStyle.color}
                        name='color'
                        onChange={handleChangeStyle}
                    />
                </div>
            </div>

            <div className='row style-selector'>
                <button
                    onClick={handleToggleChangeAllStyle}
                    className={`${changeAllStyle ? 'active' : ''}`}
                    style={{ padding: '8px 16px' }}
                >
                    change all text's style
                </button>
            </div>
        </div>
    );
}

export default StyleSelector;