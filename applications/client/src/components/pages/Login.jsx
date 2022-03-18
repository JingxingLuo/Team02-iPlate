import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
//import { Link } from "react-router-dom";

function Login() {
  const globalVar = window.sessionStorage;
  const testMessage = globalVar.getItem("testMessage");
  var boolean = globalVar.getItem("isSucceed");
  console.log(typeof(boolean));
  var color = false;
  if(boolean == "false"){
    color = false;
  }else{
    color = true;
  }

  return (
    <div>
      {/* nav bar */}
      <Navbar isLogged={true} />

      {/* content */}
      <Form />


      
      <div>{color ? <div style = {{color: "green", textAlign:"center"}}>{testMessage}</div> 
                  : <div style = {{color: "red",textAlign:"center"}}>{testMessage}</div> }
      </div>
    </div>
    
    
    
  );
}

export default Login;
