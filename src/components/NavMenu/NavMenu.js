import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export class NavMenu extends React.Component {
  expandNavMenu() {
    const $nav = document.querySelector("#navMenu");
    const $burger = document.querySelector(".burger");

    $nav.classList.contains("is-active")
      ? $nav.classList.remove("is-active")
      : $nav.classList.add("is-active");

    $burger.classList.contains("is-active")
      ? $burger.classList.remove("is-active")
      : $burger.classList.add("is-active");
  }

  render() {
    return (
      <>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link
              to={ROUTES.LANDING}
              className="navbar-item is-size-4 has-text-primary"
            >
              Hotseat Mobile
            </Link>
            {/* Ignores the linter message for missing the href on the burger*/}
            {/* eslint-disable-next-line */}
            <a
              role="button"
              className="navbar-burger burger has-text-primary"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={this.expandNavMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu"></div>
        </nav>
      </>
    );
  }
}
