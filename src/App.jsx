import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; // Page component for home
import About from "./Pages/About"; // Page component for about
import Education from "./Pages/Education"; // Page component for education
import Hobbies from "./Pages/Hobbies"; // Page component for hobbies
import Contact from "./Pages/Contact"; // Page component for contact
import NavButtons from "./components/NavButtons"; // Navigation bar component

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <NavButtons />

      <div className="container">
        {/* Routes for page navigation */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/education" element={<Education />} /> {/* Education Page */}
          <Route path="/hobbies" element={<Hobbies />} /> {/* Hobbies Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
