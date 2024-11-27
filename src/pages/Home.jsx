import React from "react";
import "../index.css"; // Ensure your CSS contains styles for the image

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="image-container">
          {/* Replace with your actual profile picture */}
          <img
            src="dean.jpg" // Replace "dean.jpg" with the correct image file name and path
            alt="Dean Pacardo's Portrait"
            className="profile-image"
          />
        </div>
        <div className="text-content">
          <h2>Hello and Welcome!</h2>
          <p>
            Hi, I'm <strong>Dean Pacardo</strong>a passionate programmer driven by curiosity and fueled by coffee. 
            My focus is on creating clean, efficient code and building seamless user experiences. Whether I'm 
            developing web applications or exploring new technologies, I'm constantly challenging myself to improve 
            and innovate. 
            Dive in to discover my projects, learn about my journey, and see how I bring ideas to life through code!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
