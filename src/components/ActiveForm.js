import { useState } from 'react';
import EmojiPicker from './EmojiPicker';

function ActiveForm({ value, setValue, sendMessage, emoji }) {
    const [showEmojis, setShowEmojis] = useState(false)

    const emojiClick = () => {
        setShowEmojis(!showEmojis)
    }

    return (
        <form onSubmit={sendMessage} style={{ width: '90%', height: '2em', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div className={`emoji-icon ${showEmojis && 'emojis-active'}`} onClick={emojiClick}></div>
            {showEmojis && <EmojiPicker emoji={emoji} />}
            <input id='input' autoComplete='off' value={value} onChange={setValue} type='text' placeholder='Enter your message...' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Enter your message...'} />
            <button className='send-button'>Send</button>
        </form>
    )
}

export default ActiveForm;