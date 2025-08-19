import React, { useState } from "react";
import Header from "./Header";

const NavBar = ({ session }) => {
  const permission = session["permission"] || "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          ESPers Starcraft Ranking System
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link">
                메인 페이지
              </a>
            </li>
            <li className="nav-item">
              <a href="/nameranking" className="nav-link">
                개인 랭킹
              </a>
            </li>
            <li className="nav-item">
              <a href="/games" className="nav-link">
                전적 목록
              </a>
            </li>
            <li className="nav-item">
              <a href="/addgamer" className="nav-link">
                선수 추가
              </a>
            </li>
            <li className="nav-item">
              <a href="/addgame" className="nav-link">
                전적 추가
              </a>
            </li>
            <li className="nav-item">
              <a href="/record" className="nav-link">
                선수 조회
              </a>
            </li>
            <li className="nav-item">
              <a href="/relative" className="nav-link">
                상대 전적
              </a>
            </li>
            {permission === "master" && (
              <li className="nav-item">
                <a href="/admin" className="nav-link">
                  관리자
                </a>
              </li>
            )}
          </ul>

          <div className="d-flex">
            <Header session={session} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
