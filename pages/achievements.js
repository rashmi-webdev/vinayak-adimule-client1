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
                    Achievements
                           </motion.h1>
         <div className="wrapper">

                  <div className="featured-layout " style={{margin:50}}>
                        <h2> Earned Best Oral Award for Paper</h2>
                        <br></br>
                        <h3 style={{color:"purple"}}>A Facile Synthesis of Poly (3-octyl thiophene): Ni0.4Sr0.6TiO3 Hybrid Nanocomposites for Solar Cell Applications in Fourth International Conference on Advances in Material Science (ICAMS-2020) on 20-21 January 2020 organized by Post-Graduate Department of Physics, Raje Ramrao Mahavidyalaya, Jath- 416 404, Dist.-Sangli, Maharashtra, India</h3>
                        <br></br>
                        <a className="btn-primary" href="https://onlinelibrary.wiley.com/doi/abs/10.1002/masy.202000001">
                        View
                        </a>
                          
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h2>Paper presentation at Second International Conference on Materials Science and Manufacturing Technology (ICMSMT 2020 on 9th and 10th April 2020 at the Hotel Aloft, Coimbatore, Tamil Nadu, India. </h2>
                        <br></br>
                        <h3 style={{color:"purple"}} > Synthesis, characterization and impedance studies of novel nanocomposites of gadolinium titanate</h3>
                        <br></br>
                        <a className="btn-primary" href="https://iopscience.iop.org/article/10.1088/1757-899X/872/1/012099">
                        View
                        </a>
                          
                  </div>
                  

      
         </div>

        </section>
    

        <section className="projects-container" >
        <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}>  Book Covers , Certificates and Memberships     </motion.h1>  
         <div className="wrapper">
      
                  <div className="projects-container " style={{marginBottom:"10vw"}}>
                  <img src="pics/bc1.jpg" alt="book cover" /><br></br>
                  <img src="pics/bc2.jpg"  alt="book cover" /><br></br>
                  <img src="pics/cert1.jpg" alt="certificate" /><br></br>
                  <img src="pics/cert2.jpg" alt="certificate" /><br></br>
                  <img src="pics/mem1.jpg" alt="membership" /><br></br>
                  <img src="pics/mem2.jpg" alt="membership" /><br></br>
                  <img src="pics/mem3.jpg" alt="membership" /><br></br>
                  <img src="pics/mem4.jpg" alt="membership" /><br></br>

                  </div>
         </div>

        </section>
      </>
    );
  }
}

export default Projects;
