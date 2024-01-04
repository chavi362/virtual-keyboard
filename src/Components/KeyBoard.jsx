import { useEffect } from 'react';
import './KeyBoardStylee.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBtnColor } from '../redux/reducer';

function KeyBoard(props) {
    const dispatch = useDispatch();
    const buttonColors = useSelector(state => state.buttonColors);
    const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let keyboardArr = [...numbersArr,...props.charactersArr];
    function toggleShift() {
        props.setisShift(!props.isShift);
    }
    useEffect(() => {
        dispatch(addBtnColor(Array(keyboardArr.length).fill('')));
    }, []);
    return (
        <div id="keyBoardK">
            <div id="letters-row" className="letters-row">
                {keyboardArr.map((char, index) => (
                    <div className={`k_b`} key={index}>
                        <button
                            className={`${buttonColors[index]}`}
                            onClick={() => props.handleButtonClick(char, index)}>
                            {char}
                        </button>
                    </div>
                ))}
            </div>
            <div id="additional-buttons" className="keyboard-row">
                <button onClick={() => props.handleButtonClick('\n')} className="enter">
                    enter
                </button>
                <button onClick={() => props.handleButtonClick('\xa0')} className="space">
                    space
                </button>
                <button onClick={() => props.handleEvent('backspace')} className="backspace">
                    backspace
                </button>
                <button onClick={toggleShift} className={`capslock ${props.isShift ? 'active' : ''}`}>
                    shift
                </button>
            </div>
        </div>
    );
}
export default KeyBoard;
