import Head from "next/head";

// import data
import PROJECTS_DATA from "../components/projects.data";

import loadable from "@loadable/component";
const ProjectCard = loadable(() =>
  import("../components/project-card/project-card.component")
);

import { motion } from "framer-motion";

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
      ],
    };
  }
  filterSkill = (e) => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    const svgVariants = {
      hidden: {
        x: -10,
      },
      visible: {
        x: 0,
      },
      transition: { duration: 3 },
    };

    const pathVariants = {
      // initial state
      hidden: {
        opacity: 0,
        pathLength: 0,
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      },
    };

    const pathVariants2 = {
      // initial state
      hidden: {
        opacity: 0,
        pathLength: 0,
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      },
    };

    const { projectsData, currentFilter, skillsList } = this.state;
    const filteredProjects = projectsData.filter((project) =>
      project.skills.includes(currentFilter)
    );
    const allProjects = projectsData;
    return (
      <>
        <Head>
          <title>Dr. Vinayak Adimule</title>
        </Head>

        <section className="projects-container">
         
          <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}>
            Educational Qualification
          </motion.h1>
         <div className="wrapper">
            <div className="featured-layout " style={{margin:50}}>
                <h3>Doctor of Philosophy  </h3>

                  <div className="project-description">
                    <p>
                    From IGNOU, New-Delhi, India and Mount Carmel
                    Center for Scientific Research (Autonomous)/2016
                    </p>
                    
                  </div>
              
            </div>

            <div className="featured-layout " style={{margin:50}}>
                <h3>Master of Science</h3>

                  <div className="project-description">
                    <p>
                    Karnatak University Dharwad in 2004, First Class
                    with Distinction. <strong>72%</strong>
                    </p>
                    
                  </div>
              
            </div>

            <div className="featured-layout " style={{margin:50}}>
                <h3>Bachelor of Science</h3>

                  <div className="project-description">
                  <p>
                    Karnatak University Dharwad in 2002, First Class
                    with Distinction. <strong>83%</strong>
                    </p>
                    
                  </div>
              
            </div>

            <div className="featured-layout " style={{margin:50}}>
                <h3> Pre-university course </h3>

                  <div className="project-description">
                  <p>
                  Gokhale Centenary College, Ankola-1999
                  First Class with Distinction. <strong>78%</strong>
                    </p>
                  </div>
              
            </div>

            <div className="featured-layout " style={{margin:50}}>
                <h3>Lawson Heights</h3>

                  <div className="project-description">
                  <p>
                  BCPU Composite College, Gokarna in 1997
                  First Class with Distinction. <strong>76%</strong>
                    </p>
                  </div>
              
            </div>

            




         </div>

        </section>
      </>
    );
  }
}

export default Projects;
