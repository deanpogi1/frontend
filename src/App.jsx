import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  
import About from "./pages/About";  
import Education from "./pages/Education"; 
import Hobbies from "./pages/Hobbies"; 
import Contact from "./pages/Contact";  
import NavButtons from "./components/NavButtons"; 

function App() {
  return (
    <Router>
      <NavButtons /> {/* Navigation Buttons Component */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;