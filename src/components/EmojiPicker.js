import { AiFillCaretDown } from 'react-icons/ai';

function EmojiPicker({ emoji }) {
    return (
        <div style={{ position: 'absolute', left: '0', bottom: '125%' }}>
            <div className='emoji-picker'>
                <div style={style} onClick={emoji}>🙂</div>
                <div style={style} onClick={emoji}>😉</div>
                <div style={style} onClick={emoji}>😜</div>
                <div style={style} onClick={emoji}>😃</div>
                <div style={style} onClick={emoji}>😆</div>
                <div style={style} onClick={emoji}>😊</div>
                <div style={style} onClick={emoji}>😅</div>
                <div style={style} onClick={emoji}>😕</div>
                <div style={style} onClick={emoji}>😞</div>
                <div style={style} onClick={emoji}>😢</div>
                <div style={style} onClick={emoji}>😠</div>
                <div style={style} onClick={emoji}>😳</div>
                <div style={style} onClick={emoji}>🤔</div>
                <div style={style} onClick={emoji}>😐</div>
                <div style={style} onClick={emoji}>😑</div>
                <div style={style} onClick={emoji}>😲</div>
                <div style={style} onClick={emoji}>😶</div>
                <div style={style} onClick={emoji}>😍</div>
                <div style={style} onClick={emoji}>😎</div>
                <div style={style} onClick={emoji}>😴</div>
            </div>
            <AiFillCaretDown style={{ position: 'absolute', left: '.3em', bottom: '-0.6em', color: 'hsl(240, 9%, 23%)', fontSize: '1.25em' }} />
        </div>
    )
}

const style = {
    fontSize: '1.3em',
    cursor: 'pointer'
}

export default EmojiPicker;