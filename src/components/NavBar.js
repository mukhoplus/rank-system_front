import React from "react";
import Header from "./Header";

const NavBar = ({ session }) => {
  const permission = session["permission"] || "";

  return (
    <nav className="navbar navbar-light static-top">
      <div className="left">
        <a href="/" className="navbar-brand">
          ESPers Starcraft Ranking System
        </a>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
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
        {permission === "master" ? (
          <li>
            <a href="/admin" className="nav-link px-2 link-dark">
              관리자
            </a>
          </li>
        ) : (
          <></>
        )}
      </ul>

      <Header session={session} />
    </nav>
  );
};

export default NavBar;
