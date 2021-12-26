import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCept42K929W9Y_qIZmv4zM0ObWz12yZWU',
    authDomain: 'clothing-app-16518.firebaseapp.com',
    projectId: 'clothing-app-16518',
    storageBucket: 'clothing-app-16518.appspot.com',
    messagingSenderId: '421872094358',
    appId: '1:421872094358:web:09f06f17fc862cd57c46b7',
    measurementId: 'G-R0K78RTMBK',
};

class Firebase {
    constructor() {
        //! INSTANCE APP FIREBASE DB
        app.initializeApp(firebaseConfig);
        this.storage = app.storage();
        this.firestore = app.firestore();
        this.auth = app.auth();
        this.provider = new app.auth.GoogleAuthProvider();
    }
    
    signInWithGoogle = () => this.auth.signInWithPopup(this.provider.setCustomParameters({ prompt: 'select_account' })); //! signInWithPopup take this Provider

}

const firebase = new Firebase();
export default firebase;
//!web ~ Authentication: signin method -> enable Google.
//!project public-facing name: project-421872094358
//!project support email: victhangnguyen@gmail.com