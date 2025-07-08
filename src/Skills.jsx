import React from "react";

function Skills() {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    background: "#222",
    color: "#fff",
    border: "1px solid #e50914",
    borderRadius: "8px",
    padding: "0.8rem 1.2rem",
    margin: "0.5rem",
    width: "12vw",
    height: "20vh",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "2rem",
    backgroundColor: "black",
    minHeight: "100vh",
  };

  const skillIcon = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginRight: "10px",
  };
  const skillIcong = {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginRight: "10px",
  };
  const headi = {
    color: "#fff",
  };

  return (
    <>
      <h2 style={headi}> Skills</h2>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <img
            style={skillIcon}
            src="https://prernapal130.github.io/prerna-portfolio/react1.png"
            alt="React"
          />
          React.js
        </div>
        <div style={boxStyle}>
          <img
            style={skillIcon}
            src="https://prernapal130.github.io/prerna-portfolio/js1.png"
            alt="JavaScript"
          />
          JavaScript
        </div>
        <div style={boxStyle}>
          <img
            style={skillIcon}
            src="https://prernapal130.github.io/prerna-portfolio/html1.png"
            alt="html"
          />
          HTML
        </div>
        <div style={boxStyle}>
          <img
            style={skillIcon}
            src="https://prernapal130.github.io/prerna-portfolio/Css1.png"
            alt="CSS"
          />
          CSS
        </div>
        <div style={boxStyle}>
          <img
            style={skillIcong}
            src="https://prernapal130.github.io/prerna-portfolio/Git1.png"
            alt="github"
          />
          Git & GitHub
        </div>
        <div style={boxStyle}>
          <img
            style={skillIcon}
            src="https://prernapal130.github.io/prerna-portfolio/cpp1.png"
            alt="cpp"
          />
          C++
        </div>
      </div>
    </>
  );
}

export default Skills;
