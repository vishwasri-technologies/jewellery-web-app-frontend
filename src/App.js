import React from "react";
<<<<<<< HEAD
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
import Chains from "./Components/Chains";
>>>>>>> ac75082 (started chains)

const App = () => {
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
=======
    <div>
      <Chains />
    </div>
>>>>>>> ac75082 (started chains)
  );
};

export default App;