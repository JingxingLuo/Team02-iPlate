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
    </div>
  );
}

export default Navbar;
