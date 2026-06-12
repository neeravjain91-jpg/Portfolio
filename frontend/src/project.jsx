function Projects() {
  const projects = [
    {
      title: "E-Book Mart",
      description: "Online bookstore website"
    },
    {
      title: "AI Interview Coach",
      description: "AI-powered interview preparation platform"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects"
    }
  ];

  return (
    <section>
      <h2>Projects</h2>

      <div className="skills-grid">
        {projects.map((project, index) => (
          <div className="skill-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;