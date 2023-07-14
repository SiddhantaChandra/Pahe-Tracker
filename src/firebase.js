import firebase from 'firebase/app';
import 'firebase/auth';
const key = `AIzaSyCNW4KjRrRuyV1KJnz_2Ar3VD0XbkQHMn4`;
const firebaseConfig = {
  // Add your Firebase project's configuration here
  apiKey: key,
  authDomain: 'http://localhost:3000/',
  projectId: 'pahe-tracker',
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
