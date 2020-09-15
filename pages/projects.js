import Head from "next/head";

// import data
import PROJECTS_DATA from "../components/projects.data";

import loadable from "@loadable/component";
const ProjectCard = loadable(() =>
  import("../components/project-card/project-card.component")
);

// import ProjectCard from "../components/project-card/project-card.component";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectsData: PROJECTS_DATA,
      currentFilter: "ALL",
      skillsList: [
        {
          id: 1,
          name: "ALL",
        },
        {
          id: 2,
          name: "React.js",
        },
        {
          id: 3,
          name: "Vue.js",
        },
        {
          id: 4,
          name: "Bootstrap",
        },
        {
          id: 5,
          name: "JavaScript",
        },
        {
          id: 6,
          name: "HTML5",
        },
        {
          id: 7,
          name: "CSS3",
        },
        {
          id: 8,
          name: "LESS",
        },
        {
          id: 9,
          name: "SASS/SCSS",
        },
        {
          id: 10,
          name: "Mobile First",
        },
        // {
        //   id: 11,
        //   name: "RESTful API",
        // },
      ],
    };
  }
  filterSkill = (e) => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    const { projectsData, currentFilter, skillsList } = this.state;
    const filteredProjects = projectsData.filter((project) =>
      project.skills.includes(currentFilter)
    );
    const allProjects = projectsData;
    return (
      <>
        <Head>
          <title>Irene Truong | Projects</title>
        </Head>

        <section className="projects-container">
          <h1>Projects</h1>
          <ul className="skills-list">
            {skillsList.map((skill) => (
              <button
                onClick={this.filterSkill}
                key={skill.id}
                value={skill.name}
                className={`${currentFilter == skill.name ? "active-btn" : ""}`}
              >
                {skill.name}
              </button>
            ))}
          </ul>

          {currentFilter == "ALL" ? (
            <div className="project-card-list">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="project-card-list">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </>
    );
  }
}

export default Projects;
