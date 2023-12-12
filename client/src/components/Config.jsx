import React, { useState, useEffect } from "react";
import axios from "axios";

const Config = () => {
    const [os, setOs] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/config")
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
                <div className="spec">
                    <div className="label">OS</div>
                    <div className="detail">{os.os}</div>
                </div>
                <div className="spec">
                    <div className="label">OS VERSION</div>
                    <div className="detail">{os.version}</div>
                </div>
                <div className="spec">
                    <div className="label">OTHER OS DESCRIPTION</div>
                    <div className="detail">{os.osDescription}</div>
                </div>
                <div className="spec">
                    <div className="label">OS MANUFACTURER</div>
                    <div className="detail">{os.manufacturer}</div>
                </div>
                <div className="spec">
                    <div className="label">OS RELEASE</div>
                    <div className="detail">{os.release}</div>
                </div>
                <div className="spec">
                    <div className="label">OS ARCHITECTURE</div>
                    <div className="detail">{os.architecture}</div>
                </div>
                <div className="spec">
                    <div className="label">MACHINE TYPE</div>
                    <div className="detail">{os.machineType}</div>
                </div>
                <div className="spec">
                    <div className="label">PROCESSOR</div>
                    <div className="detail">{os.processor}</div>
                </div>
                <div className="spec">
                    <div className="label">PLATFORM</div>
                    <div className="detail">{os.platform}</div>
                </div>
                <div className="spec">
                    <div className="label">TOTAL PHYSICAL MEMORY</div>
                    <div className="detail">{os.totalRam} GB</div>
                </div>
                <div className="spec">
                    <div className="label">AVAILABLE PHYSICAL MEMORY</div>
                    <div className="detail">{os.availableRam} GB</div>
                </div>
                <div className="spec">
                    <div className="label">USED PHYSICAL MEMORY</div>
                    <div className="detail">{os.usedRam} GB</div>
                </div>
                <div className="spec">
                    <div className="label">
                        PERCENT OF PHYSICAL MEMORY USAGE
                    </div>
                    <div className="detail">{os.percentRam} %</div>
                </div>
                <div className="spec">
                    <div className="label">TOTAL VIRTUAL MEMORY</div>
                    <div className="detail">{os.totalVirtualMem} GB</div>
                </div>
                <div className="spec">
                    <div className="label">AVAILABLE VIRTUAL MEMORY</div>
                    <div className="detail">{os.availableVirtualMem} GB</div>
                </div>
                <div className="spec">
                    <div className="label">USED VIRTUAL MEMORY</div>
                    <div className="detail">{os.usedVirtualMem} GB</div>
                </div>
                <div className="spec">
                    <div className="label">FREE VIRTUAL MEMORY</div>
                    <div className="detail">{os.freeVirtualMem} GB</div>
                </div>
                <div className="spec">
                    <div className="label">PERCENT OF VIRTUAL MEMORY USAGE</div>
                    <div className="detail">{os.percentVirtualMem} %</div>
                </div>
            </div>
            <div className="network"></div>
        </div>
    );
};

export default Config;
