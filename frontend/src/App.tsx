import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import LandingPage from './components/LandingPage';
import LoginedPage from './components/LoginedPage';
import NavBar from './components/NavBar';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path="/logined" exact component={LoginedPage} />
            </Switch>
        </Router>
    )
}

export default App;
