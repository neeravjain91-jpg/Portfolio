function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "MySQL"
  ];

  return (
    <section>
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill,index)=>(
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;