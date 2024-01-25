import './KeyBoardStylee.css';

function KeyBoard(props) {
  return (
    <>
      <div id="vk-board" className={`lang-${props.langCode}`}>
        {props.keyList &&
          props.keyList.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="d-flex justify-center">
                {row.map((item, index) => {
                  const displayText = props.isShift
                    ? item[2] || item[1]
                    : item[1];
                  const nonLiterals = [
                    'key-bspc',
                    'key-caps',
                    'key-tab',
                    'key-return',
                    'key-lshift',
                    'key-rshift',
                    'key-lcmd',
                    'key-rcmd',
                    'key-lopt',
                    'key-ropt',
                    'key-lctrl',
                    'key-rctrl',
                    'key-spc',
                  ];
                  if (nonLiterals.includes(item[0])) {
                    switch (item[0]) {
                      case 'key-bspc':
                        return (
                          <div
                            key={index}
                            className={`key ${item[0]}`}
                            onClick={() => props.handleEvent('backspace')}
                          >
                            {displayText}
                          </div>
                        );
                      case 'key-caps':
                      case 'key-lshift':
                      case 'key-rshift':
                        return (
                          <div
                            key={index}
                            className={`key ${item[0]}`}
                            onClick={() => props.setisShift(!props.isShift)}
                          >
                            {displayText}
                          </div>
                        );
                      case 'key-return':
                        return (
                          <div
                            key={index}
                            className={`key ${item[0]}`}
                            onClick={() => props.handleButtonClick('\n')}
                          >
                            {displayText}
                          </div>
                        );
                      case 'key-spc':
                        return (
                          <div
                            key={index}
                            className={`key ${item[0]}`}
                            onClick={() => props.handleButtonClick('\xa0')}
                          >
                            {displayText}
                          </div>
                        );
                      case 'key-tab':
                        return (
                          <div
                            key={index}
                            className={`key ${item[0]}`}
                            onClick={() =>
                              props.handleButtonClick(
                                '\u00A0\u00A0\u00A0\u00A0'
                              )
                            }
                          >
                            {displayText}
                          </div>
                        );
                      default:
                        return (
                          <div key={index} className={`key ${item[0]}`}>
                            {displayText}
                          </div>
                        );
                    }
                  } else {
                    return (
                      <div
                        key={index}
                        className={`key ${item[0]}`}
                        onClick={() => props.handleButtonClick(displayText)}
                      >
                        {displayText}
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default KeyBoard;
