import React from "react";
import Input from "./Input";

const Form = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log("test", username, password);
    const body = {
      username: username,
      password: password,
    };
    console.log(body);
    const TEMP = { username: "asdadsdsadsadsadas" };

    const settings = {
      method: "post",
      headers: {
        //'Content-Type': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:8000/users/login", settings).then((body) =>
      console.log(body)
    );
  };

  return (
    <div className="container form-container" data-aos="fade-up">
      <div className="section-title">
        <h2 className="form-title">
          {props.page === "login" ? "Welcome back!" : "Hello there!"}
        </h2>
      </div>

      <form action="forms/contact.php" method="post" className="php-email-form">
        {/* username */}
        <div className="form-group mt-3 input-container">
          <input
            type="text"
            className="form-control"
            name="username"
            id="exampleInputEmail1"
            placeholder="username / email"
            autoFocus
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* password */}
        <div className="form-group mt-3  input-container">
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* comfirm password -> register page */}
        {props.page === "register" && (
          <div className="form-group mt-3  input-container">
            <input
              type="password"
              className="form-control"
              name="confirm-password"
              id="exampleInputComfirmPassword1"
              placeholder="comfirm password"
              // value={confirmPassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}

        {/* divider -> register page */}
        {props.page === "register" && <div className="dropdown-divider"></div>}

        {/* submit button */}
        <button type="submit" className="btn btn-primary button">
          {props.page === "register" ? "Sign up!" : "Login"}
        </button>
      </form>
    </div>
    // <div className="form-container">
    //   {/* form title */}
    //   <h2 className="form-title">
    //     {props.page === "login" ? "Welcome back!" : "Hello there!"}
    //   </h2>
    //   <form>
    //     {/* username */}
    //     <div className="input-container">
    //       <input
    //         className="form-control"
    //         type="text"
    //         id="exampleInputEmail1"
    //         placeholder="email / username"
    //         required
    //         autoFocus
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>

    //     {/* password */}
    //     <div className="input-container">
    //       <input
    //         className="form-control"
    //         type="password"
    //         id="exampleInputPassword1"
    //         placeholder="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>

    //     {/* comfirm password -> register page */}
    //     {props.page === "register" && (
    //       <div className="input-container">
    //         <input
    //           className="form-control"
    //           type="password"
    //           id="exampleInputPassword1"
    //           placeholder="comfirm password"
    //         />
    //       </div>
    //     )}

    //     {/* divider -> register page */}
    //     {props.page === "register" && <div className="dropdown-divider"></div>}

    //     {/* submit button */}
    //     <button type="submit" className="btn btn-primary button">
    //       {props.page === "register" ? "Sign up!" : "Login"}
    //     </button>
    //   </form>
    // </div>
  );
};

export default Form;
