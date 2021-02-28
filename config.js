import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAUZGIyAmZr-t58cQFzLahcpq7QDhNT_wg",
  authDomain: "book-santa-2ca04.firebaseapp.com",
  projectId: "book-santa-2ca04",
  storageBucket: "book-santa-2ca04.appspot.com",
  messagingSenderId: "123604291447",
  appId: "1:123604291447:web:dd0efa43c105905744db72"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
