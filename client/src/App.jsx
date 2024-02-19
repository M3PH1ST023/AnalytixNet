import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/static/styles.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Specs from "./components/func/Specs";
import Forensics from "./components/func/Forensics";
import Analyze from "./components/func/Analyze";
import Capture from "./components/func/Capture";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/specs" element={<Specs />} />
                    <Route path="/forensic" element={<Forensics />} />
                    <Route path="/analyze" element={<Analyze />} />
                    <Route path="/capture" element={<Capture />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
