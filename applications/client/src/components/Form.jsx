import React from "react";
import Input from "./Input";

function Form(props) {
  console.log(props.page);
  return (
    <div className="form-container">
      {/* form title */}
      <h2 className="form-title">Welcome back!</h2>

      <form>
        {/* username */}
        <div className="form-group form-entry">
          <Input
            type="text"
            id="exampleInputEmail1"
            placeholder="email / username"
          />
        </div>

        {/* password */}
        <div className="form-group">
          <Input
            type="password"
            id="exampleInputPassword1"
            placeholder="password"
          />
        </div>

        {/* comfirm password -> register page */}
        {props.page === "register" && (
          <div className="form-group">
            <Input
              type="password"
              id="exampleInputPassword1"
              placeholder="comfirm password"
            />
          </div>
        )}

        {/* divider -> register page */}
        {props.page === "register" && <div className="dropdown-divider"></div>}

        {/*  */}

        {/* submit button */}
        <button type="submit" className="btn btn-primary button">
          {props.page === "register" ? "Sign up!" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Form;
