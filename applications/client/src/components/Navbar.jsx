import React from "react";
import { Link } from "react-router-dom";
import image from "../";

function Navbar(props) {
  var globalVar = window.sessionStorage;
  var isSucceed = globalVar.getItem("isSucceed");
  var loggedname = globalVar.getItem("username");

  //alert(typeof(isSucceed));
  //alert(loggedname);
  // const handleSubmit1 = () => {
  //   window.location.href = 'http://www.google.com';
  //   globalVar.removeItem("isSucceed");
  //   globalVar.removeItem("username");
  //   globalVar.removeItem("testMessage");
  //   //window.location.href='www.google.com';

  //   if(true){
  //     window.location.href = 'http://www.google.com';
  //     return (
  //       <div>
  //       <h1 style = {{paddingBottom:'120px'}}>Welcome back!</h1>
  //       <div style = {{color :'lightblue', paddingBottom:'300px'}}>
  //           Redirecting to the home page in 3 seconds..
  //       </div>
  //   </div>)
  //   }
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* should link to home page */}
        <div className="container">
          <a className="navbar-brand">
            {" "}
            {/* href="./pages/Home.jsx" */}
            <img
              className="icon"
              src="assets/img/iPlate_icon.png"
              alt="iPlate-icon"
            />
            Eat well, Live Well, Be well
          </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* Record! button */}
            {/* {props.isLogged && (
              <li className="nav-item active">
                <a className="nav-link" href="./pages/Home.jsx">
                  Record! <span className="sr-only">(current)</span>
                </a>
              </li>
            )} */}

            {/* About button */}
            {/* {props.isLogged && (
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
            )} */}

            {/* FAQ button */}
            {/* {props.isLogged && (
              <li className="nav-item">
                <a className="nav-link" href="./pages/Home.jsx">
                  FAQ
                </a>
              </li>
            )} */}

            {/* Story button */}
            {/* {props.isLogged && (
              <li className="nav-item">
                <a className="nav-link" href="./pages/Home.jsx">
                  Story
                </a>
              </li>
            )} */}

            {/* Contact Us button */}
            {/* {props.isLogged && (
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            )} */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* Login button */}
            {/* {!props.isLogged && (
              <Link
                to={"/login"}
                className="nav-link btn btn-outline-success my-2 my-sm-0 button"
              >
                Login
              </Link>
            )} */}

            {/* Sign up! button */}
            {!isSucceed && (
              <Link
                to={"/signup"}
                className="nav-link btn btn-outline-success my-2 my-sm-0 button"
              >
                Sign up!
              </Link>
            )}

            {/* LogOut button */}
            {/* {isSucceed && (
              <button type= "submit"  onClick={handleSubmit1}
                className="nav-link btn btn-outline-success my-2 my-sm-0 button"
              >
                Log Out
              </button>
            )} */}

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
