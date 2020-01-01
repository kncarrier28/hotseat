import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import { NavMenu } from "./NavMenu";
import HomePage from "./Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavMenu />
        <div className="section">
          <Route exact path={ROUTES.LANDING} />
          <Route path={ROUTES.HOME} component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
