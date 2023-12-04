import React from 'react';
import { FaTrashAlt, FaUndo, FaRedo, FaCopy, FaPaste } from 'react-icons/fa';
import './KeyBoardStylee.css'


function SpecialButtons({ handleEvent, isUndo,isRedo}) {
    return (
        <div id="spacial_buttons"className='spacial_buttons'>
            <span className="MuiIconButton-label">
                <button id="remove-all" onClick={() => handleEvent('deleteAll')}>
                    <FaTrashAlt />
                </button>
            </span>
            <span className="MuiIconButton-label">
                <button id="undo" onClick={() => handleEvent('undo')} disabled={!isUndo}>
                    <FaUndo />
                </button>
            </span>
            <span className="MuiIconButton-label">
                <button id="redo" onClick={() => handleEvent('redo')}disabled={!isRedo}>
                    <FaRedo />
                </button>
            </span>
            <span className="MuiIconButton-label">
                <button id="copy" onClick={() => handleEvent('copy')}>
                    <FaCopy />
                </button>
            </span>
            <span className="MuiIconButton-label">
                <button id="paste" onClick={() => handleEvent('paste')}>
                    <FaPaste />
                </button>
            </span>
        </div>
    );
}

export default SpecialButtons;
