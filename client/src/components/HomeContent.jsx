import logo from "../assets/logo/logo.jpeg";
import left from "../assets/left.png";
const HomeContent = () => {
    return (
        <div className="home-container">
            <div className="home-logo">
                <img src={logo} alt="" />
            </div>
            <img src={left} className="left" />
            <div className="content">
                <div className="head">AnalytixNet</div>
                <div className="content1">
                    Analytix Net is a network based solution that is brought to
                    help you analyze and self enlighten about the data that is
                    travelling in and out of your devices or network. In this
                    growing technological world we can not keep track of the
                    data that is travelling in the air.
                    <br /> Thus, <span>Analytix Net</span> is a network analysis
                    tool that is developed specifically to analyze the data
                    packets and classifying then. We do not halt just there, we
                    extend our service in helping you perform a self forensics
                    process on the files present in your device and also that
                    travel in your network. This paves a way sort out whether
                    they are exploit proof
                </div>
                <div className="content1">
                    <span>Our Features</span>
                    <li>Network analysis with data analytics</li>
                    <li>Forensics</li>
                    <li>Cryptographic analysis</li>
                    <li>System specification fetching</li>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
