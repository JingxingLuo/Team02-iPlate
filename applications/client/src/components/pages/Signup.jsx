import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
//import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      {/* nav bar */}
      <h3>Signup</h3>
      <Navbar />

      {/* content */}
      <Form />
    </div>
  );
}

export default Signup;
