import React from 'react';
import { Link } from 'react-router-dom';

//! firebase
import firebase from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Header = (props) => {
    const { isAuth } = props;
    const { initializing, user } = isAuth;
    console.log(`Header user: `, user);
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/home">
                    home
                </Link>
                <Link className="option" to="/shop">
                    shop
                </Link>
                {user ? (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="option" onClick={() => firebase.auth.signOut()}>
                            signout
                        </div>
                        <div className="email">{user.email}</div>
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Signin
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
