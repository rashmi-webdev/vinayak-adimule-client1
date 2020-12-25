import Head from "next/head";
import Link from "next/link";
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
                    Professional Expertise         </motion.h1>
         <div className="wrapper">

                  <div className="featured-layout " style={{margin:50}}>
                        <h3> M/s P. I. Drugs &Pharmaceuticals LTD, (Trans Chem Ltd),
                        Kumta (India).</h3>
                        <br></br>
                          <li>Developed two API Flunixin and Lamotriazine and able to optimize the
                        process for the industrial scale up.</li>
                          <li>Synthesized the novel pharma Intermediate ONB and successfully optimized
                        the scale up reactions to the pilot plant level.</li>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> Astra-Zeneca India Pvt. Ltd., [A Drug discovery research Laboratory
specialized in Anti Mycobacterium Tuberculosis]</h3>
                        <br></br>
                          <li>Worked on several Projects and synthesized nearly 270 novel molecules.</li>
                          <li>Synthesized molecules belonging to Pyrazolo pyridines, Pyrazolo pyradazines
class.</li> 
                          <li>Worked on MtSK, MGYR X1, MGYRX2 and Sulpha projects.</li>
                  </div>
                  <div className="featured-layout " style={{margin:50}}>
                        <h3> ADVINUS
THERAPEAUTICS-Pvt. Ltd (A TATA Enterprise)
Bangalore</h3>
                        <br></br>
                          <li>Worked mainly on below class of compounds for the diseases
Visceral Leshmaniasis Project for DNDi, Geneva.</li>
                          <li>Handled the Scaffold and Final compound Synthesis of Benzothiazoles,
Oxaboroles, Quinolines, Naptharidines and isoquinolines, Pyrimidines</li>
                  </div>

                  
                  <Link href="/publications">
            <a className="btn-primary"> View Work Experience</a>
          </Link>
      
         </div>

        </section>

        <section className="projects-container" >
        <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}> Experimental Skills and Instruments Handled    </motion.h1>  
         <div className="wrapper">
      
                  <div className="projects-container " >
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
                  <h1>Seminars</h1>
                  <div className="featured-layout " style={{margin:50}}>
                       <h2>National seminars</h2>
                       <br></br>
                       <h4 style={{color:"purple"}}> 
                       Attended a work shop on “Frontiers in Chemistry” Organized by Jawaharlal Nehru
                       Centre for Scientific and Advanced Research on 13-14-Feb-2013, held at Christ
                       University, Bangalore, India.
                       </h4>
                       <br></br>
                       <h4 style={{color:"purple"}}> 
                       Presented a Paper in UGC sponsored national seminar “Recent advances in chemical
biology” (RACB) 2013.
                       </h4>
                       <br></br>
                       <h4 style={{color:"purple"}}> 
                       Presented a Paper in UGC sponsored national seminar “Frontiers and Challenges in
chemistry” and Own First Place held at Don Bosco Engineering College, Bangalore,
India on 10-11 October 2013.
                       </h4>
                       <br></br>
                       <h4 style={{color:"purple"}}> 
                       Presented a Paper in UGC sponsored national seminar “Recent Trends in bioorganic
chemistry and its application to society (RTBAS) 26-27 September 2014.
                       </h4>
                       <br></br>
                       
                      
                         
                 </div>

                 <div className="featured-layout " style={{margin:50}}>
                       <h2>International seminars</h2>
                       <br></br>
                       <h4 style={{color:"purple"}}> 
                       Presented a paper in World Congress on Pharmaceutical Science and Chemical
Technology held in COLOMBO, SRI LANKA 16-18 December 2013.
                       </h4>
                       <br></br>
                       <h3>References</h3>
                       <h4 style={{color:"blue"}}> 
                       Dr. Prakash Kumar Rao , Prof of Chemistry , Dept of Chemistry , Mt Carmel College , palace road , Bangalore
                       </h4>
                       <h5>Contact : +919480549513 , pkra01960@yahoo.in </h5>
                       <br></br>
                       <h4 style={{color:"blue"}}> 
                       Dr. Lalita S Kumr , Associate Professor , School of Sciences , Dept of chemistry , Indra gandhi National Open University (IGNOU) New Delhi , India
                       </h4>
                       <h5>Contact : +919871300937 , lalitaskumar@ignou.ac.in </h5>
                       <br></br>
                       <h4 style={{color:"blue"}}> 
                       Prof. Sudha Medapa , Dean of Sciences , Dept of Chemistry , Mt Carmel College , palace road , Bangalore
                       </h4>
                       <h5>Contact : +919449551283 , sudha_medapa@yahoo.com </h5>
                       <br></br>
                       <Link href="/publications">
            <a className="btn-primary"> View Work Experience</a>
          </Link>
                      
                         
                 </div>
                 
         </div>

        </section>
       
      </>
    );
  }
}

export default Projects;
