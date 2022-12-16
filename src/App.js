import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavBar from './components/views/NavBar';
import Main from './components/views/Main';
import SignUp from './components/views/SignUp';
import Login from './components/views/Login';
import Games from './components/views/Games'
import AddGamer from './components/views/AddGamer'
import AddGame from './components/views/AddGame'
import NameRanking from './components/views/NameRanking'
import Footer from './components/views/Footer';

function App() {
    return (
        <Router>
            <body>
                <NavBar />

                <hr/>
                <div class="container">
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/games" component={Games} />
                        <Route path="/addgamer" component={AddGamer} />
                        <Route path="/addgame" component={AddGame} />
                        <Route path="/nameranking" component={NameRanking} />
                    </Switch>
                </div>
                <hr/>

                <Footer />
            </body>
        </Router>
    );
}

export default App;
