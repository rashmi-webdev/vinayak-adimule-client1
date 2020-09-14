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
        {
          id: 11,
          name: "RESTful API",
        },
      ],
    };
  }
  filterSkill = (e) => {
    console.log(e.target.value);
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
                  onClick={this.filterSkill}
                  key={skill.id}
                  value={skill.name}
                >
                  {skill.name}
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
