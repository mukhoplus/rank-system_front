import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Title from './components/views/Title';
import Header from './components/views/Header';
import NavBar from './components/views/NavBar';
import Main from './components/views/Main';
import SignUp from './components/views/SignUp';
import Login from './components/views/Login';
import AddGamer from './components/views/AddGamer'
import AddGame from './components/views/AddGame'
import Footer from './components/views/Footer';

function App() {
    return (
        <Router>
            <Title />

            <Header />

            <NavBar />

            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/addgamer" component={AddGamer} />
                <Route path="/addgame" component={AddGame} />
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
