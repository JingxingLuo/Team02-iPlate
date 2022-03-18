import React from "react";
//import Input from "./Input";

const Form =(props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword,setconfirmPassword]=React.useState('');
  const [message, setMessage] = React.useState('');
  var globalVar = window.sessionStorage;

  const handleSubmit = () => {
    //console.log("test",username,password);
    const body = {
      username: username,
      password: password,
    };
    //console.log(body);
    const settings = {
      method: "post",
      headers: {
        //'Content-Type': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(body),
    };

    if(password === confirmPassword)
    console.log('Password matched!');
    fetch('http://localhost:8000/users/login', settings)
    .then((res)=>res.json())
    .then(body => {
      console.log(body);
      console.log(body.isSucceed);
      //alert(body.username);
      console.log(body.message);
      setMessage(body.message);
      
      globalVar.setItem("username", JSON.stringify(body.username));
      //globalVar.setItem("testMessage", JSON.stringify(body.message));
      globalVar.setItem("isSucceed", JSON.stringify(body.isSucceed));
      if(body.isSucceed===true){
        //alert('Successfully created!')
        window.location.href = '/about';
    }else{
      alert(body.message);
    }
    });
    //.then((result)=>console.log(result))
   // .catch((err) =>console.log(err))

  };

  return (
    <div className="form-container">
      {/* form title */}
      <h2 className="form-title">Welcome back!</h2>

      <form>
        {/* username */}
        <div className="form-group form-entry">
          <input
            type="text"
            id="exampleInputEmail1"
            placeholder="email / username"
            required
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* password */}
        <div className="form-group">
          <input
            type="password"
            id="exampleInputPassword1"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* comfirm password -> register page */}
        {props.page === "register" && (
          <div className="form-group">
            <input
              type="password"
              id="exampleInputPassword2"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
        )}

        {/* divider -> register page */}
        {props.page === "register" && <div className="dropdown-divider"></div>}

        {/*  */}

        {/* submit button */}
        <button type="submit" className="btn btn-primary button" onClick={handleSubmit}>
          {props.page === "register" ? "Sign up!" : "Login"}
        </button>
        <div>
          {/* {message} */}
        </div>
      </form>
    </div>
  );
};

export default Form;
