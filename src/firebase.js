import firebase from "firebase/compat/app";
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyC1OFod0iriIfAI_ZvbUmHcHOkD24VyHwk",
    authDomain: "animelibrary-9e1a3.firebaseapp.com",
    projectId: "animelibrary-9e1a3",
    storageBucket: "animelibrary-9e1a3.appspot.com",
    messagingSenderId: "761056152494",
    appId: "1:761056152494:web:fa6d0f56f6149a988ad63f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }