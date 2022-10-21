// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBVMIRUVm8Ua7Uyp_PKt6yR6qRjmHZHBV0",
  authDomain: "growthbot-7f01e.firebaseapp.com",
  projectId: "growthbot-7f01e",
  storageBucket: "growthbot-7f01e.appspot.com",
  messagingSenderId: "525751450485",
  appId: "1:525751450485:web:213c1b04dfcdbb1d63b13c",
  measurementId: "G-W2T4BWEGFY",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BAYPJr922sip2M_YGbnGdUr4qNiWKhrsMuhhF22dL5RwAIPeXGYghGLqW7Nv3dEX2SuWtDAslR5F1FkWbjXbmUk` })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
