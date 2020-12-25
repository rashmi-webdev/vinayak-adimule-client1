import Head from "next/head";

// import data
import PROJECTS_DATA from "../components/projects.data";

import loadable from "@loadable/component";
const ProjectCard = loadable(() =>
  import("../components/project-card/project-card.component")
);

import { motion } from "framer-motion";
import { faBold } from "@fortawesome/free-solid-svg-icons";

class Projects extends React.Component {
  constructor() {
    super();
    
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

    
    return (
      <>
        <Head>
          <title>Dr. Vinayak Adimule</title>
        </Head>

        <section className="projects-container">
         
          <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}>
                    Work Experience          </motion.h1>
         <div className="wrapper">
                <div className="featured-layout " style={{margin:50}}>
                    <h3>R & D Officer</h3>
                    <h4>M/s P. I. Drugs
                      &Pharmaceuticals LTD-
                      Kumta (India), Trans
                      Chem Ltd</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          Process Development
                          & Custom synthesis of
                          API’s
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>From 08.07.2004
                              to 20.07.2006.
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h3>Research
Associate</h3>
                    <h4>ASTRA-ZENECA India
Pvt. Ltd- Bangalore</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          Drug Discovery,
Worked On MtSK,
MGyrex, Sulpha
projects
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>From 1.08.2006
To 26-12-2007
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h3>Senior Research
scientist 1</h3>
                    <h4>ADVINUS
THERAPEAUTICS Ltd –
Bangalore (A TATA
Enterprise)</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          Drug Discovery, DNDi,
Anachor Projects
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>From 1.01.2008 1-
1-12
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h3>Research Scholar
and Guest
Lecturer</h3>
                    <h4>Center for Scientific
Research & Advanced
Learning, Mount Carmel
College, Autonomous,
Bangalore, India</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          “Synthesis,
Characterization and
Biological activity of
Nitrogen, Oxygen and
Sulphur Containing
Novel Heterocycles”
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>From 11-11-2011 to 31-
12-2014
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h3>Assistant
Professor and
Head of the
Department of
Chemistry</h3>
                    <h4>Bangalore City College,
Kalyannagar, Bangalore</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          Handled UG and PG
Classes and Labs
Research Coordinator
for Bangalore
University, Bangalore
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>From 10-1-2015 to 1-
02-2016
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h3>Assistant
Professor and
Principle
Investigator</h3>
                    <h4>BAGMR College of
Engineering and
Technology, Varur, Hubli-
581207</h4>
                      <div className="featured-layout">
                        <div className="project-description">
                          <h4> Nature of job </h4>
                          <p>
                          Handled Bachelor of
Engineering (BE)
classes and Labs
PI for DST and KCTU
funded Projects
                          </p>
                          <p className="tech-used">
                            <strong>Duration </strong>2-2-2016 to till
date
                          </p>
                        </div>
                        
                      </div>
                  </div>

                  <div className="featured-layout " style={{margin:50}}>
                    <h2> TOTAL : Industry R&D Experience: 8.5 Years; Teaching Experience: 4.5 Years</h2>
                   
                  </div>

      
         </div>

        </section>

        <section className="projects-container" >
        <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}>
                    Member of the professional bodies     </motion.h1>  
                    <div className="wrapper">
      
        <div className="projects-container " style={{marginBottom:"10vw"}}>
  <h3 style={{color:"purple"}} > LIFE MEMBER OF NATIONAL ENVIRONMENTAL SCIENCE ACADEMY</h3> <br></br>
  <h3 style={{color:"purple"}}>LIFE MEMBER OF INDIAN SCIENCE AND TECHNICAL EDUCATION</h3><br></br>
  <h3 style={{color:"purple"}} >LIFE MEMBER OF SCIENCE AND RESEARCH DEVELOPMENT SOCIETY OF INDIA</h3><br></br>
  <h3 style={{color:"purple"}} >MEMBER OF INDIAN CHEMICAL ASSOCIATION</h3><br></br>
  <h3 style={{color:"purple"}}>MEMBER OF AMERICAN CHEMICAL SOCIETY</h3><br></br>
  <h4>PROJECTS HANDLED/SUBMITTED :</h4>
  <p><h3 style={{color:"green"}}>Submitted Project to DST (S&T) department, GOI, Topic is “Synthesis,
  Charcterization, Electrical and Electronic Properties of Novel Nanocomposites”</h3></p>

                  </div>
                  </div>

        </section>
      </>
    );
  }
}

export default Projects;
