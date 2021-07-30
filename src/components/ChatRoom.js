import Message from "./Message";
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom({ currentUser, messagesRef, scroll }) {
    const query = messagesRef.orderBy('createdAt');
  
    const [messages] = useCollectionData(query, {idField: 'id'});

    return (
        <div className='chat-scrollbar' style={chat} onLoad={scroll}>
            {messages && messages.map(msg => <Message key={msg.id} message={msg} currentUser={currentUser} />)}
            <div className='scroll'></div>
        </div>
    )
}

const chat = {
    width: '93%',
    height: '93%',
    backgroundColor: 'rgba(255, 255, 255, .6)',
    borderRadius: '.5em',
    overflowY: 'scroll'
}

export default ChatRoom;