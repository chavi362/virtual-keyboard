import React from "react";
import { FaTrashAlt, FaUndo, FaRedo, FaCopy, FaPaste } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./KeyBoardStylee.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ConvertToPdf from "./ConvertToPdf";
import { Tooltip } from 'react-tooltip';


function SpecialButtons({ handleEvent, isUndo, isRedo,languege,text }) {
  const notify = () => {
    toast("Text is copied to clipboard!");
    handleEvent("copy");
  };

  return (
    <div id="spacial_buttons" className="spacial_buttons">
      <ConvertToPdf text={text} languege={languege}></ConvertToPdf>
      <Popup
        trigger={
          <button className="button" data-tooltip-id="delete-tooltip" data-tooltip-content="Delete All" >
             <style>{`
        .spacial_buttons button {
          cursor: pointer;
          padding: 5px;
        }
        .common-tooltip {
          max-width: 150px;
          padding: 5px;
        }
      `}</style>
            {" "}
            <FaTrashAlt />{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {" "}
              Are you sure you want to delete all text?{" "}
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  handleEvent("deleteAll");
                  close();
                }}
              >
                Confirm{" "}
              </button>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <span className="MuiIconButton-label">
        <button
          id="undo"
          data-tooltip-id="undo-tooltip"
          data-tooltip-content="Undo"
          onClick={() => handleEvent("undo")}
          disabled={!isUndo}
        >
          <FaUndo />
        </button>
      </span>

      <span className="MuiIconButton-label">
        <button
          id="redo"
          data-tooltip-id="redo-tooltip"
          data-tooltip-content="Redo"
          onClick={() => handleEvent("redo")}
          disabled={!isRedo}
        >
          <FaRedo />
        </button>
      </span>

      <div>
        <button onClick={notify} data-tooltip-id="copy-tooltip" data-tooltip-content="Copy">
          <FaCopy />
        </button>
        <ToastContainer />
      </div>

      <span className="MuiIconButton-label">
        <button id="paste" data-tooltip-id="paste-tooltip" data-tooltip-content="Paste" onClick={() => handleEvent("paste")}>
          <FaPaste />
        </button>
      </span>
      <Tooltip id="delete-tooltip" className= 'common-tooltip' />
      <Tooltip id="undo-tooltip" className= 'common-tooltip' />
      <Tooltip id="redo-tooltip" className= 'common-tooltip' />
      <Tooltip id="copy-tooltip" className= 'common-tooltip' />
      <Tooltip id="paste-tooltip" className= 'common-tooltip' />
    </div>

  );
}

export default SpecialButtons;
