import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import 'firebase/messaging';

const app = initializeApp({
  apiKey: "AIzaSyAEXRxHsC252y3cImqme2-0ukWS-0VTMoM",
  authDomain: "rnfcmdemo-1416e.firebaseapp.com",
  databaseURL: "https://rnfcmdemo-1416e.firebaseio.com",
  projectId: "rnfcmdemo-1416e",
  storageBucket: "rnfcmdemo-1416e.appspot.com",
  messagingSenderId: "880975358373",
  appId: "1:880975358373:web:d8440ea1a95a358521604c",
  measurementId: "G-5CWQY1CBSW",
});

const auth = getAuth(app);
const messaging = getMessaging(app);

function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });
    setTimeout(() => {
      if(messaging){
        getToken({
          vapidKey:
            "BAzBW34P5CzbSLzHD6SbWG6y400nPvjHLW3bla28ya-QJ_DCXyJCwJAeZcgAVbwdGRCupVow1YHuGZ4pyqg0nk8",
        })
          .then((token) => {
            console.log(token);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }, 20000);
  }

  

  return <>hello world</>;
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }

export default App;
