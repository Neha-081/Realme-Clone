import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcNTRmU_zSx3EekDfVGLeXZvFxJu9myaI",
    authDomain: "realme-dc089.firebaseapp.com",
    projectId: "realme-dc089",
    storageBucket: "realme-dc089.appspot.com",
    messagingSenderId: "473803971877",
    appId: "1:473803971877:web:6940caa9433c4daa77cecc"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export{auth, googleAuthProvider, facebookAuthProvider};


