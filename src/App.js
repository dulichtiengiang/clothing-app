import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
//! hooks
import useAuth from './hooks/useAuth';
//!routes
import AppRoute from './routes/AppRoute';
//! comps
import Header from './components/header/header.component';

function App() {
    const isAuth = useAuth();
    const { initializing, user } = isAuth;
    console.log(`App user: `, user);

    if (initializing) {
        return <div>Loading</div>;
    }

    return (
        <Router>
            <Header isAuth={isAuth} />
            <AppRoute />
        </Router>
    );
}

export default App;
