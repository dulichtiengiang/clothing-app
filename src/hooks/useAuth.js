//! firebase
import firebase from '../firebase/firebase.utils';

import React from 'react';

const useAuth = () => {
    const [state, setState] = React.useState(() => {
        const currentUser = firebase.auth.currentUser;
        return {
            //! Nếu user = null -> false ==> khởi tạo không được ==> initializing = true (!user)
            // initializing: !user,
            currentUser,
        };
    });

    // callback func onAuthStateChanged
    async function onAuthStateChanged(userAuth) {
        console.log(`run onAuthStateChanged`);
        if (!userAuth) {
            console.warn('No userAuth provided!');
            return;
        }

        const userRef = await firebase.createUserProfileDocument(userAuth);
        
        userRef.onSnapshot((snapShot) => {
            setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
        });
    }

    //! componentDidMount -> run once
    React.useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged((userAuth) => onAuthStateChanged(userAuth));
        //! Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    return state;
};

export default useAuth;
