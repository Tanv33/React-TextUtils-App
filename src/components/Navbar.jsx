import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.homeTitle}
        </Link>
        {/* <a className="navbar-brand" href="/">
          {props.homeTitle}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                {props.firstLink}
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/">
                {props.firstLink}
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                {props.secondLink}
              </Link>
              {/* <a className="nav-link" aria-current="page" href="/about">
                {props.firstLink}
              </a> */}
            </li>
          </ul>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              className="btn"
              style={{ backgroundColor: "#bf1111", color: "white" }}
              onClick={props.changeColorRGB}
            >
              R
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#14871a", color: "white" }}
              onClick={props.changeColorRGB}
            >
              G
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "darkblue", color: "white" }}
              onClick={props.changeColorRGB}
            >
              Bl
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "brown", color: "white" }}
              onClick={props.changeColorRGB}
            >
              Br
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#ab0ca6", color: "white" }}
              onClick={props.changeColorRGB}
            >
              Pi
            </button>
          </div>
          {/* <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div> */}
          <div className="form-check form-switch my-2 mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleButton}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  homeTitle: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  homeTitle: "My First",
  firstLink: "Home",
  secondLink: "About",
};
