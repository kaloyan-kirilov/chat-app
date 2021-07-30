import WelcomeText from "./WelcomeText";
import ChatRoom from "./ChatRoom";

function Chat({ currentUser, user, messagesRef, scroll }) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {user ? <ChatRoom currentUser={currentUser} messagesRef={messagesRef} scroll={scroll} /> : <WelcomeText />}
        </div>
    )
}

export default Chat;