import React from "react";
import "../index.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Dean Pacardo</strong>! Driven by curiosity and fueled by coffee, I’m a passionate programmer who loves crafting clean and efficient code. 
          My work focuses on [specific area or field], and I specialize in [technologies or tools you excel at].
        </p>

        <h3>What I Do</h3>
        <p>
          Currently, I’m [e.g., freelancing, working at XYZ company, contributing to open-source, or building personal projects]. 
          One of my favorite recent projects involved [brief project description or challenge solved].
        </p>

        <h3>Achievements</h3>
        <p>
          Some of my notable accomplishments include [highlight certifications, awards, or impactful work]. 
          Feel free to explore my projects on <a href="https://github.com/deanpogi1" target="_blank" rel="noopener noreferrer">GitHub</a> or check out my portfolio at [Portfolio Link].
        </p>

        <h3>Beyond Programming</h3>
        <p>
          Outside of coding, I love hitting the court for a good game of basketball—it’s the perfect way to recharge. 
          I’m also a proud dog lover and coffee connoisseur. There’s nothing quite like solving complex problems with a cup of fresh brew beside me.
        </p>

        <h3>Let’s Connect</h3>
        <p>
          I’m always excited to collaborate, share ideas, or just have a friendly chat. Feel free to reach out to me via 
          <a> Gmail</a> or email me at <a href="mailto:dpacardo@gbox.ncf.edu.ph">Gmail</a>. Let’s create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
