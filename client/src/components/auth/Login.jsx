import React, { useState } from "react";
import logo from "../../assets/logo/logo.jpeg";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        axios
            .get(
                "http://127.0.0.1:5000/api/v1/login?username=" +
                    username +
                    "&password=" +
                    password
            )
            .then((resp) => {
                if (resp.data == true) {
                    window.location.replace("http://localhost:5173/home");
                } else {
                    window.location.reload(true);
                }
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    };
    return (
        // <div className="login-container">
        //     <img src={logo} className="logo" />
        //     <div className="login-form">
        //         <h2>Sign in</h2>
        //         <input
        //             type="text"
        //             placeholder="Enter username"
        //             onChange={userNameChange}
        //         />
        //         <input
        //             type="password"
        //             placeholder="Enter password"
        //             onChange={userPassChange}
        //         />
        //         <div className="register">
        //             <p>
        //                 New User ? <a href="/signup">Sign Up</a>
        //             </p>
        //             <p>Forgot Password</p>
        //         </div>
        //         <hr />
        //         <button onClick={handleSubmit}>Sign in</button>
        //     </div>
        // </div>
        <div className="main-container">
            <div className="login-container">
                <div className="login">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="login-form">
                        <form action="" onSubmit={handleSubmit}>
                            <h2>Sign in</h2>
                            <input
                                type="text"
                                placeholder="Enter username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <div className="register">
                                <p>
                                    New User ? <a href="/signup">Sign Up</a>
                                </p>
                                <p>Forgot Password</p>
                            </div>
                            <hr />
                            <button>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
