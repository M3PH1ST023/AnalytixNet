import home from "../../assets/sidebar/home.png";
import graph from "../../assets/sidebar/bar-graph.png";
import network from "../../assets/sidebar/network.png";
import forensic from "../../assets/sidebar/search.png";
import specs from "../../assets/sidebar/adjust.png";
import logout from "../../assets/sidebar/upload.png";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="bar">
                <a href="/home">
                    <img src={home} className="bar-icon" alt="" />
                </a>
                <a href="/analyze">
                    <img src={graph} className="bar-icon" alt="" />
                </a>
                <a href="/capture">
                    <img src={network} className="bar-icon" alt="" />
                </a>
                <a href="/forensic">
                    <img src={forensic} className="bar-icon" alt="" />
                </a>
                <a href="/specs">
                    <img src={specs} className="bar-icon" alt="" />
                </a>
                <a href="/">
                    <img src={logout} alt="" id="logout" />
                </a>
            </div>
            <div className="basebar"></div>
        </div>
    );
};

export default Sidebar;
