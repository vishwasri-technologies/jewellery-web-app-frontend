<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Necklace from "./Components/Necklace";
import Chains from "./Components/Chains";
import All from "./Components/All.js";
import EarringsRings from "./Components/EarRings.js";
import Bangles from "./Components/Bangles.js";
import Signup from "./Components/Signup.js";


=======
import React from 'react'
import Footer from './Components/Footer'
>>>>>>> 654736a (footer done)

export default function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/earrings-rings" element={<EarringsRings />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
=======
    <div>
      <Footer />
    </div>
  )
>>>>>>> 654736a (footer done)
}

