import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgUaMTaFR8a0tl7yaCByfeF-0Qw0UhSw4",
  authDomain: "invoice-app-1bb27.firebaseapp.com",
  projectId: "invoice-app-1bb27",
  storageBucket: "invoice-app-1bb27.appspot.com",
  messagingSenderId: "206662330746",
  appId: "1:206662330746:web:ea6398ffb272512bba8ec3"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore()

