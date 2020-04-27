import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfT_r-wjKL3lqyZDaHwPBwhwdZPEuANyE",
    authDomain: "react-photo-app-d85c0.firebaseapp.com",
    databaseURL: "https://react-photo-app-d85c0.firebaseio.com",
    projectId: "react-photo-app-d85c0",
    storageBucket: "react-photo-app-d85c0.appspot.com",
    messagingSenderId: "79438828088",
    appId: "1:79438828088:web:8ad04275919563f4d28ccd",
    measurementId: "G-2GTXWW2E59"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
