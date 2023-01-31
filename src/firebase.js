import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDl7cPil0diGNlkQzb04-50Tu9au-DMj1s",
    authDomain: "slack-clone-808d4.firebaseapp.com",
    databaseURL: "https://slack-clone-808d4.firebaseio.com",
    projectId: "slack-clone-808d4",
    storageBucket: "slack-clone-808d4.appspot.com",
    messagingSenderId: "956594258104",
    appId: "1:956594258104:web:2bb0898b2cf2e45fad744d",
    measurementId: "G-YBTZ3HQEBB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;