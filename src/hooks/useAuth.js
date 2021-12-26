//! firebase
import firebase from '../firebase/firebase.utils';

import React from 'react';

const useAuth = () => {
    const [state, setState] = React.useState(() => {
        const user = firebase.auth.currentUser;
        return {
            //! Nếu user = null -> false ==> khởi tạo không được ==> initializing = true (!user)
            initializing: !user,
            user,
        };
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        setState({initializing: false, user});
    }

    React.useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(onAuthStateChanged);
        //! unsubscribe to the listener when unmounting (listerning to authentication)
        //! Cleanup subscription on unmount
        return unsubscribe;
        //! close it whenever our Component unmounts, and it will close the Subscription
    }, []);

    return state;
};

export default useAuth;
