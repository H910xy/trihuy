// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibq29QkNDpA202Z7IrCeqicQlhvSJi24",
  authDomain: "nhjsi07-575b2.firebaseapp.com",
  projectId: "nhjsi07-575b2",
  storageBucket: "nhjsi07-575b2.appspot.com",
  messagingSenderId: "720940454001",
  appId: "1:720940454001:web:6ce02797ebda828b838bd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // khoi tao firebase project
export const auth = getAuth(app)  // bien auth bay gio se su dung thay cho ham getAuth voi config la bien app dc khoi tao tu firebase
export const db = getFirestore(app) // khai bao cho firebase biet minh se su dung firestore database thong qua bien database voi config chinh la bien app khoi tao boi firebaseConfig

export const ROOM_CHAT_COLLECTION = 'Global_Chat' // khai bao ten collection


export const FIREBASE_COLLECTION = "Songs"


export const actionCodeSettings = {
    url: 'http://localhost:5173/',
    handleCodeInApp: true,
}