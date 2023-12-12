import React from "react";
import setting from "../assets/adjust.png";
import home from "../assets/home.png";
import chart from "../assets/pie-chart.png";
import logout from "../assets/upload.png";
import steg from "../assets/picture.png";
import forensic from "../assets/search.png";
import network from "../assets/react.svg";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="logo">
                <a href="/">
                    <img src={home} alt="home" />
                </a>
            </div>
            <div className="icons">
                <div className="stat">
                    <a href="/dashboard">
                        <img src={chart} alt="stats" />
                    </a>
                </div>
                <div className="steg">
                    <a href="/steganography">
                        <img src={steg} alt="stats" />
                    </a>
                </div>
                <div className="forensic">
                    <a href="">
                        <img src={forensic} alt="stats" />
                    </a>
                </div>
                <div className="network">
                    <a href="">
                        <img src={network} alt="stats" />
                    </a>
                </div>
                <div className="setting">
                    <a href="/config">
                        <img src={setting} alt="" />
                    </a>
                </div>
            </div>
            <div className="logout">
                <a href="">
                    <img src={logout} alt="logout" />
                </a>
            </div>
        </div>
    );
};

export default SideBar;
