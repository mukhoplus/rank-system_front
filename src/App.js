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
    function getCookies(){
        function isCookie(obj){
            if(JSON.stringify(obj) === '[""]') return 0;
            else return Object.keys(obj).length;
        }

        let cookie = {};
        const allCookies = document.cookie.split('; ');
        allCookies.forEach(c =>{
            const temp = c.split('=');
            cookie[temp[0]] = temp[1];
        });

        const id = isCookie(allCookies) ? cookie['id'] : "";
        const name = isCookie(allCookies) ? cookie['name'] : "";
        const permission = isCookie(allCookies) ? cookie['permission'] : "";

        return [id, name, permission];
    }
    
    let data = getCookies();
    const permission = data[2];
    
    function routing(){
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

    if(['/addgamer', '/addgame'].indexOf(window.location.pathname) !== -1 && permission !== 'true'){
        alert('????????? ????????????.\n??????????????? ???????????????.');
        window.location.href = "/";
    }
    else{
        return routing();
    }
}

export default App;
