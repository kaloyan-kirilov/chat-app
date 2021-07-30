import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "chat-app-efaf5.firebaseapp.com",
    projectId: "chat-app-efaf5",
    storageBucket: "chat-app-efaf5.appspot.com",
    messagingSenderId: "757276321854",
    appId: "1:757276321854:web:f4624f54a8ee0cd5b2896f",
    measurementId: "G-J0FL44HGBP"
})

export default firebase;