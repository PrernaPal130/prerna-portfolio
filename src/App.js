import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ProfileScreen from "./ProfileScreen";
import "./App.css";
import Skills from "./Skills";
import Certi from "./Certi";
import Projects from "./Projects";

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [showWhoIsWatching, setShowWhoIsWatching] = useState(false);
  const navigate = useNavigate();

  const playSound = () => {
    const sound = new Audio(
      "https://prernapal130.github.io/prerna-portfolio/sounds/netflix-sound.mp3"
    );
    sound.play();
    setIsClicked(true);
    setTimeout(() => {
      setShowWhoIsWatching(true);
    }, 2000);
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="App">
      {!showWhoIsWatching ? (
        <header className="hero-section1">
          <div className="hero-content">
            <h1 className="prerna-text">PRERNA</h1>
            <p>Code. Create. Inspire.</p>
            <button className="cta-button" onClick={playSound}>
              Start Streaming My Work
            </button>
          </div>
        </header>
      ) : (
        <div className="who-is-watching-screen">
          <h2>Who's Watching?</h2>
          <div className="profile-selection">
            <div className="profile p1" onClick={handleProfileClick}>
              <img
                src="https://prernapal130.github.io/prerna-portfolio/images/blue.png"
                alt="Recruiter"
              />
              <p>Recruiter</p>
            </div>
            <div className="profile p2" onClick={handleProfileClick}>
              <img
                src="https://prernapal130.github.io/prerna-portfolio/images/red.png"
                alt="Developer"
              />
              <p>Developer</p>
            </div>
            <div className="profile p3" onClick={handleProfileClick}>
              <img
                src="https://prernapal130.github.io/prerna-portfolio/images/grey.png"
                alt="Friends"
              />
              <p>Friends</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/prerna-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Certi" element={<Certi />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
