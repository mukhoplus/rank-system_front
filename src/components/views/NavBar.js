import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

function NavBar() {
  return (
    <nav className="navbar navbar-light static-top">
      <div className="left">
        <a href="/" className="navbar-brand">
          ESPers Starcraft Ranking System
        </a>
      </div>
      <ui className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 link-dark">
            메인 페이지
          </a>
        </li>
        <li>
          <a href="/nameranking" className="nav-link px-2 link-dark">
            개인 랭킹
          </a>
        </li>
        <li>
          <a href="/games" className="nav-link px-2 link-dark">
            전적 목록
          </a>
        </li>
        <li>
          <a href="/addgamer" className="nav-link px-2 link-dark">
            선수 추가
          </a>
        </li>
        <li>
          <a href="/addgame" className="nav-link px-2 link-dark">
            전적 추가
          </a>
        </li>
        <li>
          <a href="/record" className="nav-link px-2 link-dark">
            선수 조회
          </a>
        </li>
        <li>
          <a href="/relative" className="nav-link px-2 link-dark">
            상대 전적
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
