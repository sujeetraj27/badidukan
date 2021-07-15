import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC-8hzJdqz_7RHJcj39DdwQzpwmq02cAZk",
    authDomain: "demo321-e84ec.firebaseapp.com",
    projectId: "demo321-e84ec",
    storageBucket: "demo321-e84ec.appspot.com",
    messagingSenderId: "381471552350",
    appId: "1:381471552350:web:96642ff38abf26790a55cf",
    measurementId: "G-J62GZTKZQH"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  export default firebase;
  export {auth}