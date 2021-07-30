import './App.css';
import { useState } from 'react';
import Top from './components/Top';
import Chat from './components/Chat';
import Bottom from './components/Bottom';
import emojiMap from './components/EmojiMap';

import firebase from './config/config';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const currentUser = auth.currentUser

  const messagesRef = firestore.collection('messages');

  const [formValue, setFormValue] = useState('');

  const autoScroll = () => {
    const scroll = document.querySelector('.scroll');
    scroll.scrollIntoView({ behavior: 'smooth' });
  }

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = currentUser;

    if (formValue !== '') {
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
      })
    }

    setFormValue('');

    autoScroll();
  }

  const setValue = (e) => {
    const value = emojiMap(e.target.value)
    setFormValue(value)
  }

  const emojiClick = (e) => {
    const input = document.getElementById('input')
    input.focus()

    const start = formValue.substring(0, input.selectionStart)
    const end = formValue.substring(input.selectionStart)
    const emoji = e.target.innerHTML
    const message = start + emoji + end

    setFormValue(message)
  }

  const googleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

  const googleSignOut = () => {
    auth.signOut()
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <main className='chat-app'>
        <section className='top'>
          <Top signIn={googleSignIn} signOut={googleSignOut} currentUser={currentUser} user={user} />
        </section>
        <section className='chat'>
          <Chat currentUser={currentUser} user={user} messagesRef={messagesRef} scroll={autoScroll} />
        </section>
        <section className='bottom'>
          <Bottom user={user} value={formValue} setValue={setValue} sendMessage={sendMessage} emoji={emojiClick} />
        </section>
      </main>
      <footer className='footer-text'>
        <p>Developed by <a href='https://kaloyan-kirilov.github.io/' targer='_blank'>kaloyan-kirilov.github.io</a></p>
      </footer>
    </div>
  );
}

export default App;