import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* should link to home page */}
        {/* <a className="navbar-brand" href="./pages/Login.jsx">
          <Link to={"/"}>
            <img
              className="icon"
              src="/assets/img/iPlate_icon.png"
              alt="iPlate-icon"
            />
          </Link>
        </a> */}
        <img
          className="icon"
          src="/assets/img/iPlate_icon.png"
          alt="iPlate-icon"
        />
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
            <li className="nav-item active">
              <a className="nav-link" href="./pages/Home.jsx">
                Record! <span className="sr-only">(current)</span>
              </a>
            </li>
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

                {/* <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="./pages/Home.jsx">
                  Something else here
                </a> */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/Home.jsx">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/Home.jsx">
                Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/Home.jsx">
                Contact Us
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link disabled" href="./pages/Home.jsx">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link
              to={"/login"}
              className="nav-link btn btn-outline-success my-2 my-sm-0 button"
            >
              Login
            </Link>
            {/* </button> */}
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0 button"
              type="submit"
            >
              Sign up!
            </button> */}
            <Link
              to={"/signup"}
              className="nav-link btn btn-outline-success my-2 my-sm-0 button"
            >
              Sign up!
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
