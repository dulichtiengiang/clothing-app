import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/home'>home</Link>
                <Link className="option" to='/shop'>shop</Link> 
                <Link className="option" to='/signin'>signin</Link> 
            </div>
        </div>
    );
};

export default Header;
