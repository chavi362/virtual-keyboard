import React from 'react';
import './KeyBoardStylee.css';

function Screen(props) {
  const text = props.text;

  if (Array.isArray(text)) {
    return (
      <div className="DivTextArea" aria-label="Text Area" id="textbox1_freetext" role="textbox" tabIndex="0">
        {text.map((item, index) => {
          switch (item.char) {
            case "\n":
              return (<br key={index}/>);
            default :
              return (
                <span key={index} style={item.style}>
                  {item.char}
                </span>
              );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="DivTextArea" aria-label="Text Area" id="textbox1_freetext" role="textbox" tabIndex="0">
        {text}
      </div>
    );
  }
}

export default Screen;