/* eslint-disable */
import React from "react";
import axios from "axios";

const Header = ({ session }) => {
  const onLogoutHandler = () => {
    const requestLogout = async () => {
      await axios
        .delete("/logout")
        .then((response) => {
          if (response.status === 200) {
            alert("로그아웃되었습니다.");
          } else {
            alert("잘못된 접근입니다.");
          }
          window.location.href = "/";
        })
        .catch(() => {
          alert("잘못된 접근입니다.");
          window.location.href = "/";
        });
    };

    if ([undefined, ""].indexOf(name) !== -1) {
      alert("잘못된 접근입니다.");
      window.location.href = "/";
    } else {
      requestLogout();
    }
  };

  const name = session["name"];

  if (["/signup", "/login"].indexOf(window.location.pathname) === -1) {
    // 비로그인 상태 랜더링
    if (name === "" || name == undefined) {
      return (
        <div className="navbar-nav flex-row">
          <a className="btn btn-outline-primary me-2" href="/login">
            로그인
          </a>
          <a className="btn btn-primary" href="/signup">
            회원가입
          </a>
        </div>
      );
    }
    // 로그인 상태 랜더링
    else {
      return (
        <div className="navbar-nav flex-row align-items-center">
          <span className="navbar-text me-3">{name}님 반갑습니다.</span>
          <a className="btn btn-primary" onClick={onLogoutHandler}>
            로그아웃
          </a>
        </div>
      );
    }
  }
};

export default Header;
