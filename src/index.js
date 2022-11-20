import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LogIn from "./components/LogIn";
import Men from "./components/Men";
import SignUp from "./components/SignUp";
import Woman from "./components/Woman";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/women" element={<Woman />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/men" element={<Men />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </Router>
);
