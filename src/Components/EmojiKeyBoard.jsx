import React, { useState } from 'react';
import { useEmojiData } from "../hooks/useEmojiData";

function EmojiKeyBoard({ handleInputButtonClick }) {
    const emojiCategories = useEmojiData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filtering emojis based on search term
    const filteredEmojis = Object.entries(emojiCategories)
    .reduce((acc, [category, emojis]) => {
        acc[category] = emojis.filter(emoji => typeof emoji === 'string' && emoji.includes(searchTerm));
        return acc;
    }, {});

    return (
        <div className='emoji-keyboard'>
            {/* Adding search input */}
            <input 
                type="text"
                placeholder="Search emojis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Updating search term state on change
            />
            {/* Rendering emojis based on filtered emojis */}
            {Object.entries(filteredEmojis).map(([category, emojis]) => (
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