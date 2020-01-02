import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="level">
          <div className="level-item">
            <p className="title">Welcome to Hotseat Mobile!</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="level">
              <div className="level-item">
                <Link
                  rederAs="button"
                  className="button is-primary"
                  to={ROUTES.NEW_GAME}
                >
                  Start New Game
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="level">
              <div className="level-item">
                <Link
                  renderAs="button"
                  className="button is-primary"
                  to={ROUTES.JOIN_GAME}
                >
                  Join Game
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
