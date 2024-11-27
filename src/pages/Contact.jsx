import React from "react";
import "../index.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="contact-heading">Contact Me</h2>
        
        <p className="contact-intro">
          I'm always open to new opportunities, collaborations, or even just a casual conversation! Whether you have 
          a project in mind, want to share ideas, or simply want to connect, feel free to reach out. Let’s make something amazing together!
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> <a href="mailto:deanpogi1@gmail.com">deanpogi1@gmail.com</a> {/* Update email address */}
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+639669148678">+63 966 914 8678</a>
          </p>
        </div>

        <p className="contact-footer">
          I’m excited to hear from you, whether it’s for a project, collaboration, or just to chat.
        </p>
        <p className="contact-footer separated-line">
          Let’s connect and create something awesome together!
        </p>
      </div>
    </section>
  );
}

export default Contact;
