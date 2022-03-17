import React from "react";
import Input from "./Input";

const Form =() => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    console.log("test",username,password);
    const body = {
      "username": username,
      "password": password
    };
    console.log(body);
    const TEMP = {username: 'asdadsdsadsadsadas'};

    const settings = {
      method: 'post',
      headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: (JSON.stringify(body)),
    };
    fetch('http://localhost:8000/users/login', settings)
    .then(body=>console.log(body));
  };

  return (
    <div className="form-container">
      {/* form title */}
      <h2 className="form-title">Welcome back!</h2>

      <form>
        <div className="form-group form-entry">
          <input
            type="text"
            id="exampleInputEmail1"
            placeholder="email / username"
            required autoFocus
                        value={username} onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="exampleInputPassword1"
            placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
