import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/NavBar.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg bg-dark text-light"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-light">
            Buy Now
          </NavLink>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ justifyContent: "flex-end" }}
          >
            <div
              className="navbar-nav"
              style={{ gap: "13px", marginRight: "50px" }}
            >
              <NavLink
                to="/"
                className="nav-link text-light"
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link text-light">
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
