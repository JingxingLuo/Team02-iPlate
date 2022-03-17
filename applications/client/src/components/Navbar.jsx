import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* should link to home page */}
        <a className="navbar-brand" href="./pages/Home.jsx">
          <img
            className="icon"
            src="/images/iPlate_icon.png"
            alt="iPlate-icon"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* Record! button */}
            {props.isLogged && (
              <li className="nav-item active">
                <a className="nav-link" href="./pages/Home.jsx">
                  Record! <span className="sr-only">(current)</span>
                </a>
              </li>
            )}

            {/* About button */}
            {props.isLogged && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="./pages/Home.jsx"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="./pages/Home.jsx">
                    Mission
                  </a>
                  <a className="dropdown-item" href="./pages/Home.jsx">
                    Our Team
                  </a>
                </div>
              </li>
            )}

            {/* FAQ button */}
            {props.isLogged && (
              <li className="nav-item">
                <a className="nav-link" href="./pages/Home.jsx">
                  FAQ
                </a>
              </li>
            )}

            {/* Story button */}
            {props.isLogged && (
              <li className="nav-item">
                <a className="nav-link" href="./pages/Home.jsx">
                  Story
                </a>
              </li>
            )}

            {/* Contact Us button */}
            {props.isLogged && (
              <li className="nav-item">
                <a className="nav-link" href="./pages/Home.jsx">
                  Contact Us
                </a>
              </li>
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* Login button */}
            {!props.isLogged && (
              <Link
                to={"/"}
                className="nav-link btn btn-outline-success my-2 my-sm-0 button"
              >
                Login
              </Link>
            )}

            {/* Sign up! button */}
            {!props.isLogged && (
              <Link
                to={"/signup"}
                className="nav-link btn btn-outline-success my-2 my-sm-0 button"
              >
                Sign up!
              </Link>
            )}

            {/* My Account button */}
            {props.isLogged && (
              <button
                className="btn btn-outline-success my-2 my-sm-0 button"
                type="submit"
              >
                My Account
              </button>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
