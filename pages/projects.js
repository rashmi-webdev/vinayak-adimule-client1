import Head from "next/head";
import Layout from "../components/layout/layout-component";

// import data
import PROJECTS_DATA from "../components/projects.data";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectsData: PROJECTS_DATA,
      currentFilter: "Vue.js",
      skillsList: [
        {
          id: 1,
          skill: "ALL",
        },
        {
          id: 2,
          skill: "React.js",
        },
        {
          id: 3,
          skill: "Vue.js",
        },
        {
          id: 4,
          skill: "Bootstrap",
        },
        {
          id: 5,
          skill: "JavaScript",
        },
        {
          id: 6,
          skill: "HTML5",
        },
        {
          id: 7,
          skill: "CSS3",
        },
        {
          id: 8,
          skill: "LESS",
        },
        {
          id: 9,
          skill: "SASS/SCSS",
        },
        {
          id: 10,
          skill: "Mobile First",
        },
        {
          id: 11,
          skill: "RESTful API",
        },
      ],
    };
  }
  filterSkill = (e) => {
    console.log(e.target.value);
    //target innerHTML as new currentFilter
    this.setState({ currentFilter: e.target.value });
  };
  render() {
    const { projectsData, currentFilter, skillsList } = this.state;
    const filteredProjects = projectsData.filter((project) =>
      project.skills.includes(currentFilter)
    );
    return (
      <>
        <Layout>
          <Head>
            <title>Irene Truong | Projects</title>
          </Head>

          <section className="projects-container">
            <h1>Projects</h1>
            <ul className="skills-list">
              {skillsList.map((skill) => (
                <button
                  onClick={(e) => this.filterSkill(e)}
                  key={skill.id}
                  value={skill.skill}
                >
                  {skill.skill}
                </button>
              ))}
            </ul>

            <div className="project-card-list">
              {filteredProjects.map((project) => (
                <div className="card" key={project.id}>
                  <p>{project.title}</p>
                </div>
              ))}
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Projects;
