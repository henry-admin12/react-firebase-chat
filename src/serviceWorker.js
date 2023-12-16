// // Import and configure the Firebase SDK
// // These scripts are made available when the app is served or deployed on Firebase Hosting
// // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

// importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js"
// );
// //importScripts('/__/firebase/init.js');
// // var firebaseConfig = {
// //   apiKey: "AIzaSyAEXRxHsC252y3cImqme2-0ukWS-0VTMoM",
// //   authDomain: "rnfcmdemo-1416e.firebaseapp.com",
// //   databaseURL: "https://rnfcmdemo-1416e.firebaseio.com",
// //   projectId: "rnfcmdemo-1416e",
// //   storageBucket: "rnfcmdemo-1416e.appspot.com",
// //   messagingSenderId: "880975358373",
// //   appId: "1:880975358373:web:d8440ea1a95a358521604c",
// //   measurementId: "G-5CWQY1CBSW",
// // };
// // // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);

// // const messaging = firebase.messaging();

// const app = initializeApp({
//   apiKey: "AIzaSyAEXRxHsC252y3cImqme2-0ukWS-0VTMoM",
//   authDomain: "rnfcmdemo-1416e.firebaseapp.com",
//   databaseURL: "https://rnfcmdemo-1416e.firebaseio.com",
//   projectId: "rnfcmdemo-1416e",
//   storageBucket: "rnfcmdemo-1416e.appspot.com",
//   messagingSenderId: "880975358373",
//   appId: "1:880975358373:web:d8440ea1a95a358521604c",
//   measurementId: "G-5CWQY1CBSW",
// });


// const auth = getAuth(app);
// const messaging = getMessaging(app);

// /**
//  * Here is is the code snippet to initialize Firebase Messaging in the Service
//  * Worker when your app is not hosted on Firebase Hosting.

//  // [START initialize_firebase_in_sw]
//  // Give the service worker access to Firebase Messaging.
//  // Note that you can only use Firebase Messaging here, other Firebase libraries
//  // are not available in the service worker.
//  importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
//  importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');

//  // Initialize the Firebase app in the service worker by passing in
//  // your app's Firebase config object.
//  // https://firebase.google.com/docs/web/setup#config-object
//  firebase.initializeApp({
//    apiKey: 'api-key',
//    authDomain: 'project-id.firebaseapp.com',
//    databaseURL: 'https://project-id.firebaseio.com',
//    projectId: 'project-id',
//    storageBucket: 'project-id.appspot.com',
//    messagingSenderId: 'sender-id',
//    appId: 'app-id',
//    measurementId: 'G-measurement-id',
//  });

//  // Retrieve an instance of Firebase Messaging so that it can handle background
//  // messages.
//  const messaging = firebase.messaging();
//  // [END initialize_firebase_in_sw]
//  **/

// // If you would like to customize notifications that are received in the
// // background (Web app is closed or not in browser focus) then you should
// // implement this optional method.
// // [START background_handler]
// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.data.title ? payload.data.title : "----";
//   const notificationBody = payload.data.body ? payload.data.body : "---";
//   const notificationOptions = {
//     body: notificationBody,
//     icon: "/GMH_1024.jpg",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
// // [END background_handler]


import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});