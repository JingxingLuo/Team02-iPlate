import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* nav bar */}
      <Navbar />

      {/* content */}
      <Form />
    </div>
  );
}

export default Login;
