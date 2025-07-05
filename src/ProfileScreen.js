import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileScreen.css";

function ProfileScreen() {
  const navigate = useNavigate();
  return (
    <div className="profile-screen">
      <>
        <nav className="navbar">
          <span className="logo">PRERNA</span>
        </nav>
        <div className="hero-section">
          <div className="intro-overlay">
            <div className="intro-text">
              <h1>
                PRERNA<span className="Pal"> PAL</span>
              </h1>
              <p>
                Creative Developer | Passionate about building unique digital
                experiences.
              </p>
            </div>
            <div className="buttons">
              <button
                className="resume-btn"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mjejFu5llz1oKoPe1WA-4Btzi40GPe6W/view",
                    "_blank"
                  )
                }
              >
                ▶ Resume
              </button>
              <button
                className="linkedin-btn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prerna-pal-735957250/",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </button>
            </div>
          </div>
          <div className="background-image"></div>
        </div>
        <section className="top-picks">
          <h2>Today's Top Picks for Recruiter</h2>
          <div className="card-row">
            <div className="card" onClick={() => navigate("/skills")}>
              <img
                src="https://media4.giphy.com/media/8IGuMMq3Aka8Zq9Kax/giphy.gif"
                alt="skills"
                className="card-img"
              />
              <div className="card-title">Skills</div>
            </div>
            <div className="card" onClick={() => navigate("/Certi")}>
              <img
                src="https://webstockreview.net/images/certificate-clipart-animation-9.gif"
                alt="certification"
                className="card-img"
              />
              <div className="card-title">Certificates</div>
            </div>
            <div className="card" onClick={() => navigate("/Projects")}>
              <img
                src="https://media1.tenor.com/images/3a7a4b0d445c7b4a4b2bc55477a33c26/tenor.gif?itemid=19512437"
                alt="Projects"
                className="card-img"
              />
              <div className="card-title">Projects</div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default ProfileScreen;
