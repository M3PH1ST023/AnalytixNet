import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";

const Forensics = () => {
    const [file, setFile] = useState(null);
    const [exifData, setExifData] = useState({});
    const [secureDetail, setSecureDetail] = useState({});

    const fileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file", file);
            await axios
                .post("http://127.0.0.1:5000/api/v1/forensic", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((resp) => {
                    setExifData(resp.data);
                });
        } catch (error) {
            setExifData({});
            console.error("Error uploading file:", error);
        }
        try {
            axios
                .get("http//127.0.0.1:5000/api/v1/secure/" + file)
                .then((resp) => {
                    setSecureDetail(resp.data);
                });
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const [isActive, setIsActive] = useState("max-content");
    var touch = 0;
    const toggle = () => {
        if (touch == 0) {
            setIsActive("90vh");
            touch = 1;
        } else {
            setIsActive("max-content");
            touch = 0;
        }
    };
    return (
        <div className="home-container">
            <div className="forensic-container">
                <form className="form-content">
                    <input
                        type="file"
                        onChange={fileChange}
                        className="form-input"
                    />
                    <button onClick={handleUpload} className="form-button">
                        Analyze
                    </button>
                </form>
                <div
                    className="metadata"
                    onClick={toggle}
                    style={{ height: isActive }}
                >
                    <h3>Meta Data</h3>
                    <div className="metadata-content" id="metaContent">
                        {Object.entries(exifData).map(([key, value]) => (
                            <div className="exif">
                                <p className="left-text">{key}</p>
                                <p className="right-text">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <Sidebar />
            </div>
        </div>
    );
};

export default Forensics;
