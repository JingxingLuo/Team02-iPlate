import React from "react";
import Navbar from "../Navbar";
// import Form from "../Form";
//import { Link } from "react-router-dom";

  const Login =(props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [message, setMessage] = React.useState('');
    var globalVar = window.sessionStorage;

    //alert(typeof(globalVar.isSucceed));
    if(globalVar.isSucceed==="true")
    {
      window.location.href = '/about';
    }

    const handleSubmit2 = () => {
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
                //"Access-Control-Allow-Origin": *
                //"Content-Type": "text/plain"
            },
            body: JSON.stringify(body),
        };

            fetch('http://localhost:8000/users/login', settings)
            .then((res) =>res.json()
                ).then((body) => {
                  //alert(body.isSucceed);
                    if(body.isSucceed===true){
                      globalVar.setItem("username", JSON.stringify(body.username));
                    //   alert("This is the branch");
                      globalVar.setItem("isSucceed", JSON.stringify(body.isSucceed));
                      //alert('!!')
                      
                    }
                    else{
                      alert(body.message);
                    }
                }).catch((err)=> {
                  alert(err);
                    window.location.href='/signup';
                    
                });

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

                    {/* divider -> register page */}
                    {/* {props.page === "register" && <div className="dropdown-divider"></div>} */}

                    {/*  */}

                    {/* submit button */}
                    <button type="submit" className="btn btn-primary button" onClick={handleSubmit2}>
                        {/*{props.page === "register" ? "Sign up!" : "Login"}*/}
                        {'Log in'}
                    </button>
                    <div>
                        {/* {message} */}
                    </div>
                </form>
                
            </div>


            {/* {message} */}

        </div>


    );
};

export default Login;







// import React from "react";
// import Navbar from "../Navbar";
// import Form from "../Form";

// function Login() {
//   const globalVar = window.sessionStorage;
//   var boolean = globalVar.getItem("isSucceed");
//   console.log(typeof(boolean));
//   var color = false;
//   if(boolean == "false"){
//     color = false;
//   }else{
//     color = true;
//   }
//   window.history.forward();
//   return (
//     <div>
//       {/* nav bar */}
//       <Navbar isLogged={false} />

//       {/* content */}
//       <Form />

//     </div>
    
    
    
//   );
// }

// export default Login;
