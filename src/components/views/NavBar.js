import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Header';

function NavBar(){
    return(
        <nav class="navbar navbar-light static-top">
            <div class="left">
                <a href="/" class="navbar-brand">
                    ESPers Starcraft Ranking System
                </a>
            </div>
            <ui class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <a href="/" class="nav-link px-2 link-dark">
                        메인 페이지
                    </a>
                </li>
                <li>
                    <a href="/nameranking" class="nav-link px-2 link-dark">
                        개인 랭킹
                    </a>
                </li>
                <li>
                    <a href="/games" class="nav-link px-2 link-dark">
                        전적 목록
                    </a>
                </li>
                <li>
                    <a href="/addgamer" class="nav-link px-2 link-dark">
                        선수 추가
                    </a>
                </li>
                <li>
                    <a href="/addgame" class="nav-link px-2 link-dark">
                        전적 추가
                    </a>
                </li>
            </ui>
            <Router>
                <Header />
            </Router>
        </nav>
    );
}

export default NavBar;
