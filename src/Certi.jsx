import React from "react";

function Certi() {
  const certificates = [
    {
      title: "HTML, CSS, and JavaScript: Building the Web",
      issuer: "By LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/09fb5e029ef5514547ca0efadb72b3c798c3242b07fc06c51017520e3f426b4d?trk=share_certificate",
      image: "https://prernapal130.github.io/prerna-portfolio/ll.png",
    },
    {
      title: "Career Essentials in GitHub Professional Certificate",
      issuer: "By LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/09fb5e029ef5514547ca0efadb72b3c798c3242b07fc06c51017520e3f426b4d?trk=share_certificate",
      image: "https://prernapal130.github.io/prerna-portfolio/ll.png",
    },
  ];

  const boxStyle1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    background: "#ffffff1a",
    color: "#fff",
    borderRadius: "8px",
    padding: "0.8rem 1.2rem",
    margin: "0.5rem",
    width: "20vw",
    height: "27vh",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const skillIcon = {
    width: "70%",
    height: "70%",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "2rem",
    backgroundColor: "black",
    minHeight: "100vh",
    justifyContent: "flex-start",
  };

  return (
    <div style={containerStyle}>
      {certificates.map((cert, index) => (
        <div
          key={index}
          style={boxStyle1}
          onClick={() => window.open(cert.link, "_blank")}
        >
          <img style={skillIcon} src={cert.image} alt="Certificate" />
          <h5>{cert.title}</h5>
          <p>{cert.issuer}</p>
        </div>
      ))}
    </div>
  );
}

export default Certi;
