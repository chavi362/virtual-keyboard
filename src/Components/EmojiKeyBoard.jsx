import { useEmojiData } from "../hooks/useEmojiData";

function EmojiKeyBoard({ handleInputButtonClick }) {
    const emojiCategories = useEmojiData();

    return (
        <div className='emoji-keyboard'>
            {Object.entries(emojiCategories).map(([category, emojis]) => (
                <div key={category}>
                    <h3>{category}</h3>
                    {emojis.map((emoji, index) => (
                        <button key={index} onClick={() => handleInputButtonClick(emoji)}>
                            {emoji}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default EmojiKeyBoard;