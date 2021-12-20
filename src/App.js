import { BrowserRouter as Router } from 'react-router-dom';
//!routes
import AppRoute from './routes/AppRoute';
//! pages
import Homepage from './pages/homepage/homepage.component.jsx';

function App() {
    return (
        <Router>
            <AppRoute />
        </Router>
    );
}

export default App;
