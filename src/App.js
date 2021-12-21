import { BrowserRouter as Router } from 'react-router-dom';
//!routes
import AppRoute from './routes/AppRoute';
//! comps
import Header from './components/header/header.component'

//! pages
import Homepage from './pages/homepage/homepage.component.jsx';

function App() {
    return (
        <Router>
            <Header />
            <AppRoute />
        </Router>
    );
}

export default App;
