import React from "react";
import Input from "./Input";

function Form() {
  return (
    <div className="form-container">
      {/* form title */}
      <h2 className="form-title">Welcome back!</h2>

      <form>
        <div className="form-group form-entry">
          <Input
            type="email"
            id="exampleInputEmail1"
            placeholder="email / username"
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            id="exampleInputPassword1"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
