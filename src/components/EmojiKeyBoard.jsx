import useEmojiKeyboard from "../hooks/useEmojiKeyboard";

function EmojiKeyBoard({ handleInputButtonClick }) {
    const { emojis } = useEmojiKeyboard();

    return (
        <div className="emoji-keyboard" >
            {emojis.map((emoji, index) => (
                <button key={index} onClick={() => handleInputButtonClick(emoji)}>
                    {emoji}
                </button>
            ))}
        </div>
    );
}

export default EmojiKeyBoard;