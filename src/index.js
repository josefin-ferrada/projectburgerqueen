import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase/app";


firebase.initializeApp({
    apiKey: "AIzaSyB_eg1WZk--lIgDTvJox0_PTQ2bOAwBfbY",
    authDomain: "burger-queen-eb81d.firebaseapp.com",
    databaseURL: "https://burger-queen-eb81d.firebaseio.com",
    projectId: "burger-queen-eb81d",
    storageBucket: "burger-queen-eb81d.appspot.com",
    messagingSenderId: "509801683357",
    appId: "1:509801683357:web:dbeea4d0251dd641"
})


ReactDOM.render(
    <App />, 
    document.getElementById('root'));
serviceWorker.unregister();
