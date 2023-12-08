import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";
import Home from "./components/Home";
import "./assets/component.css";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="container">
            <SideBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
