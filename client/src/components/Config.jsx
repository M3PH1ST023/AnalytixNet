import React, { useState, useEffect } from "react";
import axios from "axios";

const Config = () => {
    const [os, setOs] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/os")
            .then((resp) => {
                setOs(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="comp-container">
            <div className="os">
                <table>
                    <thead>
                        <tr>
                            <th>Configuration</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>OS</td>
                            <td>{os.os}</td>
                        </tr>
                        <tr>
                            <td>Os version</td>
                            <td>{os.version}</td>
                        </tr>
                        <tr>
                            <td>Os release</td>
                            <td>{os.release}</td>
                        </tr>
                        <tr>
                            <td>Architecture</td>
                            <td>{os.architecture}</td>
                        </tr>
                        <tr>
                            <td>Machine type</td>
                            <td>{os.machineType}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Config;
