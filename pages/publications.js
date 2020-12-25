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
                    Publications       </motion.h1>
         <div className="wrapper">

                  <div className="featured-layout " style={{margin:50}}>
                        <h3> Synthesis, characterization and impedance studies of novel nanocomposites of gadolinium titanate. IOP Conf. Series: Materials Science and Engineering 872 (2020)</h3>
                        <br></br>
                        <h4>Vinayak Adimule, Anusha Suryavanshi and Santosh Nandi.</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1088/1757-899X/872/1/012099">
                        View
                        </a>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> Fabrication of novel rare earth doped ionic perovskite nanomaterials of Sr0.5, Cu0.4, Y0.1 and Sr0.5 and Mn0.5 for high power efficient energy harvesting photovoltaic cells. AIP Conference Proceedings 2274, 020005 (2020).</h3>
                        <br></br>
                        <h4>Santosh S. Nandi, Anusha Suryavanshi, Vinayak Adimule, and Basappa C. Yallur.</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1063/5.0022450">
                        View
                        </a>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> A Facile Synthesis of Poly (3-octyl thiophene): Ni0.4Sr0.6TiO3 Hybrid Nanocomposites for Solar Cell Applications. Macromol. Symp. 2020, 392, 2000001</h3>
                        <br></br>
                        <h4>Vinayak Adimule, * Anusha Suryavanshi, Yallur BC, and Santosh S. Nandi</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1002/masy.202000001">
                        View
                        </a>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> Synthesis, Impedance, and Current–Voltage Characteristics of Strontium-Manganese Titanate Hybrid Nanoparticles. Macromol. Symp. 2020, 392, 2000002.</h3>
                        <br></br>
                        <h4>Anusha Suryavanshi, Vinayak Adimule, * and Santosh S. Nandi.</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1002/masy.202000002">
                        View
                        </a>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> Semiconductor current-voltage characteristics of some novel perovskite ionic nanocomposites of Sr0.5, Cu0.4, Y0.1 and Sr0.5, Mn0.5 and their electronic sensor applications. AIP Conference Proceedings 2274, 020006 (2020)</h3>
                        <br></br>
                        <h4>Santosh S. Nandi, Anusha Suryavanshi, Vinayak Adimule, and Sanjeev Reddy Maradur</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1063/5.0022453">
                        View
                        </a>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3>Super capacitor characteristics of novel rare earth perovskite nanomaterials of Sr0.5, Cu0.4, Y0.1. AIP Conference Proceedings 2274, 020007 (2020)</h3>
                        <br></br>
                        <h4>Santosh S. Nandi, Anusha Suryavanshi, Vinayak Adimule, and Basappa C. Yallur.</h4>
                        <br></br>
                        <a className="btn-publish" href="https://doi.org/10.1063/5.0022454 ">
                        View
                        </a>
                  </div>
        

                  

      
         </div>

        </section>

        <section className="projects-container" >
        <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}> Experimental Skills and Instruments Handled    </motion.h1>  
         <div className="wrapper">
      
                  <div className="projects-container " style={{marginBottom:"10vw"}}>
  <li>Have done a number of experiments on micro & macro scale and carried out routine
Functional group identification & transformations. </li>
  <li>Experience in multi-step synthesis of Organic molecules. Experience in handling air
sensitive reagents. </li>
  <li>Good experience in handling Parallel reactions. </li>
  <li>Done many
microwave-assisted reactions using domestic and “CEM” “Biotage” microwaves.
Chromatographic techniques viz. Column chromatography, automated system
consisting of Argonaut pre packed columns, Argonaut solvent handling System and
Gilson fraction collector helpful for high speed purification.</li>
  <li>Very good hands on experience in Normal Phase chromatographic separation using
Comb flash system. </li>
  <li>Hands on experience in handling of Instruments such as HPLC (Shimazdu), LCMS
(AGILENT) with auto sampler. Knowledge of separation of compounds by HPLC
technique (Preparative HPLC). </li>
  <li>Operating knowledge of NMR (BRUKER 300MHz
and Varian (400MHz). Determination of structure by Interpretation of the IR, NMR,
CMR, Mass Spectrum, HPLC & G.C. </li>

  
                  </div>
         </div>

        </section>
      </>
    );
  }
}

export default Projects;
