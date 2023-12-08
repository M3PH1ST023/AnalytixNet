import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="left">
                <h2>Utility</h2>
                <ul>
                    <li>Network monitoring</li>
                    <li>Network forensics management</li>
                    <li>Steganography analytics</li>
                    <li>Centralised dashboard for network traffic</li>
                    <li>Malicious file activity monitoring</li>
                </ul>
            </div>
            <div className="mid">
                <h2>AnalytixNet</h2>
                <img src={logo} alt="" />
            </div>
            <div className="right">
                <h2>temp</h2>
                <ul>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
