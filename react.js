import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        let storedUsername = localStorage.getItem("username");
        if (!storedUsername) {
            storedUsername = prompt("Please enter your name:");
            if (storedUsername) {
                localStorage.setItem("username", storedUsername);
                setUsername(storedUsername);
            }
        } else {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div className="hero">
            <h1>Welcome, {username || "Guest"}</h1>
            <p>Your ultimate AI-powered resume builder</p>
            <Link to="/build-resume" className="btn">Get Started</Link>
        </div>
    );
};

const BuildResume = () => (
    <div className="container">
        <h1>How would you like to build your resume?</h1>
        <div className="resume-options">
            <div className="option-block">
                <h2>Start with a New Resume</h2>
                <p>Create a brand new resume using our AI-powered tools.</p>
                <Link to="/new-resume" className="btn">Continue</Link>
            </div>
            <div className="option-block">
                <h2>Upload an Existing Resume</h2>
                <p>Upload your current resume to edit and improve it.</p>
                <Link to="/upload-resume" className="btn">Upload</Link>
            </div>
        </div>
    </div>
);

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/build-resume">Build Resume</Link>
        <Link to="/cover-letter">Cover Letter</Link>
        <Link to="/interview-builder">Interview Prep</Link>
    </nav>
);

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/build-resume" element={<BuildResume />} />
            </Routes>
        </Router>
    );
};

export default App;
