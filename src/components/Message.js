function Message(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === props.currentUser.uid ? 'sent' : 'received';

    return (
        <div style={message} className={`${messageClass}`}>
            <img src={photoURL} style={photo} alt='' />
            <p style={bubble}>{text}</p>
        </div>
    )
}

const message = {
    fontSize: '1em',
    display: 'flex',
    margin: '.6em'
}

const photo = {
    height: '2.25em',
    borderRadius: '50%'
}

const bubble = {
    borderRadius: '.5em',
    padding: '.7em .8em',
    fontFamily: 'Roboto',
    fontSize: '.85em',
    maxWidth: '14em',
    wordWrap: 'break-word'
}

export default Message;