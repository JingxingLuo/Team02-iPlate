import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";

function Login() {
  const globalVar = window.sessionStorage;
  var boolean = globalVar.getItem("isSucceed");
  console.log(typeof(boolean));
  var color = false;
  if(boolean == "false"){
    color = false;
  }else{
    color = true;
  }
  window.history.forward();
  return (
    <div>
      {/* nav bar */}
      <Navbar isLogged={false} />

      {/* content */}
      <Form />

    </div>
    
    
    
  );
}

export default Login;
