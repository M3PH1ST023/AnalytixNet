import React from "react";
import axios, { toFormData } from "axios";
import j from "jquery";

const Dashboard = () => {
    const speedCheck = () => {
        var userImageLink =
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
        var time_start, end_time;
        // The size in bytes
        var downloadSize = 5616998;
        var downloadImgSrc = new Image();
        document.querySelector(".loader-content").classList.add("hide");
        document.querySelector(".loader").classList.remove("hide");
        var loader = document.querySelector(".loader");
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
        downloadImgSrc.onload = function () {
            end_time = new Date().getTime();
            displaySpeed();
        };
        time_start = new Date().getTime();
        downloadImgSrc.src = userImageLink;
        // document.write("time start: " + time_start);
        // document.write("<br>");
        function displaySpeed() {
            var timeDuration = (end_time - time_start) / 1000;
            var loadedBits = downloadSize * 8;

            /* Converts a number into string 
                   using toFixed(2) rounding to 2 */
            var speed = loadedBits / timeDuration;
            speed = speed / 1024;
            speed = speed / 1024;
            speed = speed.toFixed(2);
            var bps = (loadedBits / timeDuration).toFixed(2);
            var speedInKbps = (bps / 1024).toFixed(2);
            var speedInMbps = (speedInKbps / 1024).toFixed(2);
            document.querySelector(".content").innerHTML = speed + "Mbps";
            document.querySelector(".loader-content").classList.remove("hide");
            document.querySelector(".loader").classList.add("hide");
            document.querySelector(".content").classList.remove("hide");
        }
    };

    return (
        <div className="dashboard-container">
            <div className="top-cards">
                <div className="box red">
                    <p>Ip of User</p>
                    <h2>127.0.0.1</h2>
                </div>
                <div className="box blue">
                    <p>Hostname of User</p>
                    <h2>mephisto-82fg</h2>
                </div>
                <div className="box green">
                    <p>Connection name</p>
                    <h2>The Boyz</h2>
                </div>
                <div className="box yellow">
                    <p>Device MAC</p>
                    <h2>mac address</h2>
                </div>
            </div>
            <div className="loader-widget">
                <h2>Internet Speed</h2>
                <span className="loader hide"></span>
                <div className="loader-content">
                    <div className="content hide"></div>
                    <button onClick={speedCheck}>Check</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
