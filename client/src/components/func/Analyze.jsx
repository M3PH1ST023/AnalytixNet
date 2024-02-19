import axios from "axios";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Analyze = () => {
    const [files, setFiles] = useState([]);
    const [filename, setFilename] = useState("");
    const [data, setData] = useState("");
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/files")
            .then((resp) => {
                setFiles(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const analyze = (e) => {
        axios
            .get("http://127.0.0.1:5000/api/v1/analyze?filename=" + filename)
            .then((resp) => {
                console.log(resp.data);
                setData(resp.data);
                document.getElementById("file-name").value = "";
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="home-container">
            <div className="files">
                {files.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
            <div className="analyze-data">
                <input
                    className="analyze-input"
                    type="text"
                    placeholder="Enter filename to be analyzed"
                    id="file-name"
                    onChange={(e) => {
                        setFilename(e.target.value);
                        console.log(filename);
                    }}
                />
                <br />
                <button className="analyze-button" onClick={analyze}>
                    Analyze
                </button>
            </div>

            <div className="bottom">
                <Sidebar />
            </div>
        </div>
    );
};

export default Analyze;
