import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCDXGLjXgyHH4eH1soOvOUxJAmdEuh9TwU",
    authDomain: "react-pc5.firebaseapp.com",
    databaseURL: "https://react-pc5.firebaseio.com",
    projectId: "react-pc5",
    storageBucket: "react-pc5.appspot.com",
    messagingSenderId: "886860366460",
};

firebase.initializeApp(firebaseConfig);

export default firebase;