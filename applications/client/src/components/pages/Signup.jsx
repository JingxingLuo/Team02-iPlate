import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";

function Signup() {
  return (
    <div>
      {/* nav bar */}
      <Navbar isLogged={false} />

      {/* content */}
      <Form page="register" />
    </div>
  );
}

export default Signup;
