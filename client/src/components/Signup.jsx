import axios from "axios";
import { useState } from "react";
import logo from "../assets/logo/logo.jpeg";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userNameChange = (e) => {
        setUsername(e.target.value);
    };
    const userPassChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        const userData = {
            username: username,
            password: password,
        };
        axios
            .post("http://127.0.0.1:5000/api/v1/register", userData)
            .then((resp) => {
                window.location.replace("http://localhost:5173");
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    };

    return (
        <div className="login-container">
            <img src={logo} className="logo" />
            <div className="login-form">
                <h2>Sign up</h2>
                <input
                    type="text"
                    placeholder="Enter username"
                    onChange={userNameChange}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={userPassChange}
                />
                <div className="register">
                    <p>
                        Already an user ? <a href="/">Sign In</a>
                    </p>
                </div>
                <hr />
                <button onClick={handleSubmit}>Sign up</button>
            </div>
        </div>
    );
};

export default Signup;
