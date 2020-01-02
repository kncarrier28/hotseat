import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import { NavMenu } from "./NavMenu";
import HomePage from "./Home";
import NewGamePage from "./NewGame";
import JoinGamePage from "./JoinGame";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavMenu />
        <div className="section">
          <Route exact path={ROUTES.LANDING} component={HomePage} />
          <Route path={ROUTES.NEW_GAME} component={NewGamePage} />
          <Route path={ROUTES.JOIN_GAME} component={JoinGamePage} />
        </div>
      </Router>
    );
  }
}

export default App;
