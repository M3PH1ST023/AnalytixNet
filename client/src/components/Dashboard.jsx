import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [ip, setIp] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/ip")
            .then((resp) => {
                setIp(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="dashboard-container">
            <div className="top-cards">
                <div className="box">
                    <p>Ip of User</p>
                    <h2>{ip.ip}</h2>
                </div>
                <div className="box">
                    <p>Hostname of User</p>
                    <h2>{ip.hostname}</h2>
                </div>
                <div className="box">
                    <p>Connection name</p>
                    <h2>{ip.connectionName}</h2>
                </div>
                <div className="box">
                    <p>Device MAC</p>
                    <h2>{ip.macAddress}</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
