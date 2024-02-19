import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Capture = () => {
    const [capturing, setCapturing] = useState(false);
    const [analyze, setAnalyze] = useState(false);
    const [filename, setFilename] = useState("None");
    const [message, setMessage] = useState("<p>Capturing not started !</p>");

    const changeFileName = (e) => {
        setFilename(e.target.value);
    };

    const startCapture = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/api/v1/start"
            );
            setCapturing(true);
            setIsRunning(true);
            setMessage("<p>Capturing ... </p>");
            console.log(response.data.message);
        } catch (error) {
            console.error("Error starting capture:", error);
        }
    };

    const stopCapture = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/api/v1/stop?filename=" + filename
            );
            setCapturing(false);
            setAnalyze(true);
            setMessage("<p>File saved as " + filename + ".pcap </p> <br />");
            setCapturedData(response.data.data);
            document.getElementById("file-name").value = "";
            console.log(response.data.message);
        } catch (error) {
            console.error("Error stopping capture:", error);
        }
    };

    return (
        <div className="home-container">
            <div className="capture-container">
                <div className="capture-content">
                    <button onClick={startCapture} disabled={capturing}>
                        Start Capture
                    </button>
                    <button onClick={stopCapture} disabled={!capturing}>
                        Stop Capture
                    </button>
                    <input
                        type="text"
                        placeholder="Enter filename to be saved"
                        onChange={changeFileName}
                        id="file-name"
                    />
                    <a href="/analyze">
                        <button className="analyse-button" disabled={!analyze}>
                            Analyze
                        </button>
                    </a>
                </div>
                <div
                    className="msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                ></div>
            </div>
            <div className="bottom">
                <Sidebar />
            </div>
        </div>
    );
};

export default Capture;
