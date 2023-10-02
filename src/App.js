import React, { useEffect, useState } from "react";
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
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [session, setSession] = useState({});

  const getSession = async () => {
    await axios.get("/hello").then((response) => {
      setSession(response.data);
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  const permission = session["permission"] || "";

  const routing = () => {
    return (
      <>
        <NavBar session={session} />
        <Router>
          <div>
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
                <Route path="/admin" component={Admin} />
              </Switch>
            </div>
            <hr />
          </div>
        </Router>
        <Footer />
      </>
    );
  };

  if (Object.keys(session).length !== 0) {
    if (
      ["/addgamer", "/addgame"].indexOf(window.location.pathname) !== -1 &&
      !permission
    ) {
      alert("권한이 없습니다.\n운영자에게 문의하세요.");
      window.location.href = "/";
    } else if (
      ["/admin"].indexOf(window.location.pathname) !== -1 &&
      permission !== "master"
    ) {
      alert("권한이 없습니다.\n운영자에게 문의하세요.");
      window.location.href = "/";
    } else if (
      ["/login", "/signup"].indexOf(window.location.pathname) !== -1 &&
      session["id"]
    ) {
      window.location.href = "/";
    } else {
      return routing();
    }
  }
};

export default App;
