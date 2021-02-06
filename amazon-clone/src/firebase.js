import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqw7i4Ou0sfa7WbzT2E1pOuovlXZuCFbs",
    authDomain: "clone-e4b6a.firebaseapp.com",
    databaseURL: 'https://clone-e4b6a.firebaseio.com',
    projectId: "clone-e4b6a",
    storageBucket: "clone-e4b6a.appspot.com",
    messagingSenderId: "455090770630",
    appId: "1:455090770630:web:ae953684b043ce1aae7dc7",
});

const auth = firebase.auth();

export { auth };