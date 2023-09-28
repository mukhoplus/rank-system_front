import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Games from "./pages/Games";
import AddGamer from "./pages/AddGamer";
import AddGame from "./pages/AddGame";
import NameRanking from "./pages/NameRanking";
import Record from "./pages/Record";
import ViewRecord from "./pages/ViewRecord";
import Relative from "./pages/Relative";
import ViewRelative from "./pages/ViewRelative";
import Footer from "./components/Footer";

const App = () => {
  const getCookies = () => {
    const isCookie = (obj) => {
      if (JSON.stringify(obj) === '[""]') return 0;
      else return Object.keys(obj).length;
    };

    const cookie = {};
    const allCookies = document.cookie.split("; ");
    allCookies.forEach((c) => {
      const temp = c.split("=");
      cookie[temp[0]] = temp[1];
    });

    const id = isCookie(allCookies) ? cookie["id"] : "";
    const name = isCookie(allCookies) ? cookie["name"] : "";
    const permission = isCookie(allCookies) ? cookie["permission"] : "";

    return [id, name, permission];
  };

  const data = getCookies();
  const permission = data[2];

  const routing = () => {
    return (
      <Router>
        <div>
          <NavBar />
          <hr />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/games" component={Games} />
              <Route path="/addgamer" component={AddGamer} />
              <Route path="/addgame" component={AddGame} />
              <Route path="/nameranking" component={NameRanking} />
              <Route path="/record" component={Record} />
              <Route path="/viewrecord" component={ViewRecord} />
              <Route path="/relative" component={Relative} />
              <Route path="/viewrelative" component={ViewRelative} />
            </Switch>
          </div>
          <hr />
          <Footer />
        </div>
      </Router>
    );
  };

  if (
    ["/addgamer", "/addgame"].indexOf(window.location.pathname) !== -1 &&
    permission === ""
  ) {
    alert("권한이 없습니다.\n운영자에게 문의하세요.");
    window.location.href = "/";
  } else {
    return routing();
  }
};

export default App;
