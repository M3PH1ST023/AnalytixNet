import HomeContent from "./HomeContent";
import Sidebar from "./func/Sidebar";

const Home = () => {
    return (
        <div className="home-container">
            <HomeContent />
            <div className="bottom">
                <Sidebar />
            </div>
        </div>
    );
};
export default Home;
