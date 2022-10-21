// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken} from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const messaging = getMessaging();
const firebaseConfig = {
  apiKey: "AIzaSyBVMIRUVm8Ua7Uyp_PKt6yR6qRjmHZHBV0",
  authDomain: "growthbot-7f01e.firebaseapp.com",
  projectId: "growthbot-7f01e",
  storageBucket: "growthbot-7f01e.appspot.com",
  messagingSenderId: "525751450485",
  appId: "1:525751450485:web:213c1b04dfcdbb1d63b13c",
  measurementId: "G-W2T4BWEGFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;






