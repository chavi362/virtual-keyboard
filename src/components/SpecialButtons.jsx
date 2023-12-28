import { FaTrashAlt, FaUndo, FaRedo, FaCopy, FaPaste } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./KeyBoardStylee.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function SpecialButtons({ handleEvent, isUndo, isRedo }) {
  const { t } = useTranslation();
  const notify = () => {
    toast("Text is copied to clipboard!");
    handleEvent("copy");
  };

  return (
    <div id="spacial_buttons" className="spacial_buttons">
      <Popup
        trigger={
          <button className="button" title={t("deleteAll")}>
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
          onClick={() => handleEvent("undo")}
          disabled={!isUndo}
          title={t("undo")}
        >
          <FaUndo />
        </button>
      </span>

      <span className="MuiIconButton-label">
        <button
          id="redo"
          onClick={() => handleEvent("redo")}
          disabled={!isRedo}
          title={t("redo")}>
          <FaRedo />
        </button>
      </span>

      <div>
        <button
          onClick={notify}
          title={t("copy")}>
          <FaCopy />
        </button>
        <ToastContainer />
      </div>

      <span className="MuiIconButton-label">
        <button
          id="paste"
          onClick={() => handleEvent("paste")}
          title={t("paste")}>
          <FaPaste />
        </button>
      </span>
    </div>
  );
}

export default SpecialButtons;
