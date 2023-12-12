import axios from "axios";
import React, { createRef } from "react";

const Steg = () => {
    const fileInput = createRef();
    const scan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("stegFile", fileInput.current.value);

        try {
            const resp = await fetch("http://127.0.0.1:5000/api/v1/steg", {
                method: "post",
                body: formData,
            });

            const parsedResp = await resp.json();
            if (resp.ok) {
                alert("File uploaded");
            } else {
                alert("error occured");
            }
        } catch (e) {
            console.error(e);
        }
        // axios.post("http://127.0.0.1:5000/api/v1/steg");
    };
    return (
        <div className="steg-container">
            <form action="" onSubmit={scan}>
                <div className="inputs">
                    <label htmlFor="stegFile">File for analysis</label>
                    <input
                        ref={fileInput}
                        type="file"
                        name="stegFile"
                        className="steg-file"
                        id="stegFile"
                    />
                </div>

                <button type="submit">Analyze</button>
            </form>
        </div>
    );
};

export default Steg;
