import React from "react";

function Project() {
  const projects = [
    {
      title: "Competive coding website",
      link: "https://prernapal130.github.io/coding-site-/",
      image: "/CC.jpg",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Jagriti (College Club official website)",
      link: "",
      image: "/Jagriti site.jpg",
      techStack: ["HTML", "CSS", "React"],
    },
    {
      title: "Animal Classifier",
      link: "https://prernapal130.github.io/Ai-image/",
      image: "/animal classifier.jpg",
      techStack: ["HTML", "CSS", "React", "Teachable Machines"],
    },
    {
      title: "Portfolio",
      link: "",
      image: "/animal classifier.jpg",
      techStack: ["HTML", "CSS", "React", "Teachable Machines"],
    },
    {
      title: "Birthday Present",
      link: "https://prernapal130.github.io/birthday-countdown/",
      image: "/birthday.png",
      techStack: ["HTML", "CSS", "React"],
    },
    {
      title: "Valentine's Day for singles",
      link: "https://prernapal130.github.io/valatines-day2024/",
      image: "/valantines.png",
      techStack: ["HTML", "CSS", "React"],
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
    padding: "1rem",
    margin: "0.5rem",
    width: "20vw",
    height: "fit-content",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const skillIcon = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "6px",
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

  const techStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginTop: "0.5rem",
  };

  const tagStyle = {
    backgroundColor: "#e50914",
    color: "white",
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "999px",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      {projects.map((project, index) => (
        <div
          key={index}
          style={boxStyle1}
          onClick={() => project.link && window.open(project.link, "_blank")}
        >
          <img style={skillIcon} src={project.image} alt="Projects" />
          <h5>{project.title}</h5>

          {/* Render techStack if it exists */}
          {project.techStack && (
            <div style={techStyle}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} style={tagStyle}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Project;
