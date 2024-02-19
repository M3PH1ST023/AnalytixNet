import Sidebar from "./Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const Specs = () => {
    const [os, setOs] = useState([]);
    const [net, setNet] = useState([]);
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
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/net")
            .then((resp) => {
                setNet(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="home-container">
            <div className="specs-content">
                <div className="network">
                    <div className="head">NETWORK</div>
                    <div className="os-content">
                        <div className="spec">
                            <p>Conenction name</p>
                            <p>{net.connectionName}</p>
                        </div>
                        <div className="spec">
                            <p>Connection address</p>
                            <p>{net.ip}</p>
                        </div>
                        <div className="spec">
                            <p>MAC address</p>
                            <p>{net.macAddress}</p>
                        </div>
                        <div className="spec">
                            <p>Host Name</p>
                            <p>{net.hostname}</p>
                        </div>
                        <div className="spec">
                            <p>Network interface</p>
                            <p>{net.connectionInterface}</p>
                        </div>
                    </div>
                </div>
                <div className="os">
                    <div className="head">OS</div>
                    <div className="os-content">
                        <div className="spec">
                            <p>OS</p>
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
                    </div>
                </div>
                <div className="memories">
                    <div className="memory">
                        <div className="head">PHYSICAL MEMORY</div>
                        <div className="mem">
                            <div className="available">
                                Usage {os.availableRam} GB
                            </div>
                            <div className="total">Total {os.totalRam} GB</div>
                        </div>
                    </div>
                    <div className="memory">
                        <div className="head">MEMORY USAGE %</div>
                        <div className="mem">
                            <div className="available">
                                PHYSICAL {os.percentRam} %
                            </div>
                            <div className="total">
                                VIRTUAL {os.percentVirtualMem} %
                            </div>
                        </div>
                    </div>
                    <div className="memory">
                        <div className="head">VIRTUAL MEMORY</div>
                        <div className="mem">
                            <div className="available">
                                Usage {os.availableVirtualMem} GB
                            </div>
                            <div className="total">
                                Total {os.totalVirtualMem} GB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Sidebar />
            </div>
        </div>
    );
};

export default Specs;
