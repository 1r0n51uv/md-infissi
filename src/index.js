import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import registerServiceWorker from './registerServiceWorker';
import { FirestoreProvider } from 'react-firestore';

const root = document.getElementById('root');


const config = {
    apiKey: "AIzaSyDBWvyXgbPspZUbglDbQ8T-Z9t7WUHOzfw",
    authDomain: "mdinfissi-dd57c.firebaseapp.com",
    databaseURL: "https://mdinfissi-dd57c.firebaseio.com",
    projectId: "mdinfissi-dd57c",
    storageBucket: "mdinfissi-dd57c.appspot.com",
    messagingSenderId: "894245001468",
};

firebase.initializeApp(config);


ReactDOM.render(<FirestoreProvider firebase={firebase}> <App /> </FirestoreProvider>, root);
registerServiceWorker();


