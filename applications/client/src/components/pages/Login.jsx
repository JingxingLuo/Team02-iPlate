import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";

function Login(props) {
  return (
    <div>
      {/* nav bar */}
      <Navbar isLogged={false} />

      {/* content */}
      <Form page="login" />
    </div>
  );
}

export default Login;
