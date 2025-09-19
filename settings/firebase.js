import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4odc2E2T_d3A2ls-ibpkIXAZJq97eDk",
  authDomain: "copreneur-5421d.firebaseapp.com",
  projectId: "copreneur-5421d",
  storageBucket: "copreneur-5421d.firebasestorage.app",
  messagingSenderId: "571144055624",
  appId: "1:571144055624:web:3fdc791d0bdb3fa663617d"
};

// Initialize Firebase
const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };

