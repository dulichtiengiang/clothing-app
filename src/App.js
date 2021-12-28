import './App.css';
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
//! hooks
import useAuth from './hooks/useAuth';
//!routes
import AppRoute from './routes/AppRoute';
//! comps
import Header from './components/header/header.component';

function App() {
    const isAuth = useAuth();
    const { currentUser } = isAuth;
    console.log(`App.js -> currentUser: `, currentUser);

    //! componentDidMount ~ run once
    React.useEffect(() => {

    }, [])


    // if (initializing) {
    //     return <div>Loading</div>;
    // }

    return (
        <Router>
            <Header isAuth={isAuth} />
            <AppRoute />
        </Router>
    );
}

export default App;
