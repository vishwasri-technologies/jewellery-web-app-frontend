import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Necklace from "./Components/Necklace";
import Chains from "./Components/Chains";
import All from "./Components/All.js";
import EarRings from "./Components/EarRings.js";
import Bangles from "./Components/Bangles.js";
import Signup from "./Components/Signup.js";
import Logout from "./Components/Logout.js";
import Login from "./Components/Login.js";
import Reset from "./Components/Reset.js";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/earrings" element={<EarRings />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;