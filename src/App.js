import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//! redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
//! hooks
import useAuth from './hooks/useAuth';
//!routes
import AppRoute from './routes/AppRoute';
//! comps
import Header from './components/header/header.component';

function App(props) {
    const { currentUser } = useAuth();
    // const dispatch = useDispatch();
    console.log(`App.js -> currentUser: `, currentUser);
    // if (initializing) {
    //     return <div>Loading</div>;
    // }

    React.useEffect(() => {
        props.setCurrentUser(currentUser);
        console.log(`effect Appjs`);
        return () => {
            console.log(`clean up App.js`)
        };
    },[currentUser]);

    return (
        <Router>
            <Header />
            <AppRoute />
        </Router>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
// export default App;
