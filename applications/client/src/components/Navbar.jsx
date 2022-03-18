import React from "react";
import { Link } from "react-router-dom";
import image from "../";

function Navbar(props) {
  var globalVar = window.sessionStorage;
  var isSucceed = globalVar.getItem("isSucceed");
  var loggedname = globalVar.getItem("username");

  const handleSubmit1 = () => {
    globalVar.removeItem("isSucceed");
    globalVar.removeItem("username");
    globalVar.removeItem("testMessage");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-container">
          <a className="navbar-brand">
            {" "}
            {/* href="./pages/Home.jsx" */}
            <img
              className="icon"
              src="assets/img/iPlate_icon.png"
              alt="iPlate-icon"
            />
          </a>
        </div>
        <div className="flex-center">
          <h3 className="navbar-quote">Eat well, Live Well, Be well</h3>
        </div>
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

        {/* Sign up! button */}
        {!isSucceed && (
          <div className="nav-a">
            <Link
              to={"/signup"}
              className="btn btn-outline-success my-2 my-sm-0 button"
            >
              Sign up!
            </Link>
          </div>
        )}
      </nav>
      {isSucceed && (
        <div>
          <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
          <header
            id="header"
            className="d-flex flex-column justify-content-center"
          >
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/home" className="nav-link scrollto">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/recordFood" className="nav-link scrollto">
                    <i className="bx bx-food-tag"></i> <span>Record</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/viewHistory" className="nav-link scrollto">
                    <i className="bx bx-history"></i> <span>History</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/viewUserDetails" className="nav-link scrollto">
                    <i className="bx bx-user"></i> <span>User Details</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/about" className="nav-link scrollto">
                    <i className="bx bx-message-square-detail"></i>{" "}
                    <span>About</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/faq" className="nav-link scrollto">
                    <i className="bx bx-question-mark"></i> <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={handleSubmit1}
                    className="nav-link scrollto"
                  >
                    <i className="bx bx-log-out"></i> <span>LOGOUT</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
}

export default Navbar;
