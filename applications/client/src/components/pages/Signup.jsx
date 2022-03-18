import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
//import { Link } from "react-router-dom";

const Signup =(props) => {
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

        if (password === confirmPassword) {
            alert('HERE!')
            fetch('http://localhost:8000/users/signup', settings)
                .then((res) =>
                     res.json())
                .then((body) => {
                    alert(body.message)
                    console.log(body);
                    console.log(body.isSucceed);
                    console.log(body.message);
                    setMessage(body.message);
                    alert(body)
                    // globalVar.setItem("testMessage", JSON.stringify(body.message));
                    // globalVar.setItem("isSucceed", JSON.stringify(body.isSucceed));
                    alert(body.isSucceed)
                    if(body.isSucceed==='true'){
                        alert('Successfully created!')
                        window.location.href = '/login';
                    }
                });
            //.then((result)=>console.log(result))
            // .catch((err) =>console.log(err))
        }else{
            alert('Password did not match, please enter same password');
        }

    };

    return (
        <div >
            {/* nav bar */}
            <Navbar isLogged={false} />

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

                    <div className="form-group">
                        <input
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
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
                        {/*{props.page === "register" ? "Sign up!" : "Login"}*/}
                        {'sign up'}
                    </button>
                    <div>
                        {message}
                    </div>
                </form>
            </div>




        </div>


    );
};

export default Signup;

