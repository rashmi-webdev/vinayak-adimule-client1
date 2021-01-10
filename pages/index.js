import Head from "next/head";
import Link from "next/link";

import { useState, useCallback, useEffect } from "react";

// importing components
const SocialIcons = loadable(() =>
  import("../components/social-icons/social-icons-component")
);

// importing module styles
import homeStyles from "../styles/Home.module.scss";

import { motion } from "framer-motion";
import loadable from "@loadable/component";
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faLess,
  faJs,
  faReact,
  faVuejs,
  faGit,
  faAccessibleIcon,
  faAngular,
  faFigma,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import { faCloudRain, faExpand, faEyeDropper, faFlask, faGlobe, faHeart, faMagic, faStar } from "@fortawesome/free-solid-svg-icons";

const svgVariants = {
  hidden: {
    x: 10,
  },
  visible: {
    x: 0,
  },
  transition: { duration: 3 },
};

// white rect
const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isTablet = useMediaQuery(768);

  return (
    <>
      <Head>
        <title>Dr. Vinayak Adimule</title>
      </Head>
      <LazyLoad height={900}>
        <section className="home-hero">
          <div className="hero-image-container">
            <LazyLoad height={900}>
              <img src="images/hero2.jpg" alt="profile picture" />

              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="583"
                height="856"
                viewBox="0 0 783 856"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                
                
              </motion.svg>
            </LazyLoad>
          </div>
          <motion.div
            className="introduction"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <h1>
             Vinayak Adimule is a Chemistry professor specializing in{" "}
              <span style={{ color:"purple"}}> R & D</span>. He brings{" "}
              <span style={{ color:"purple"}} >experience</span> in both Education and Research.
            </h1>
            <div>
              <Link href="/publications">
                <a className="btn-primary">View publications</a>
              </Link>
            </div>
            <div className={homeStyles.socialContainer}>
              <SocialIcons />
            </div>
            {/* </motion.div> */}
          </motion.div>
          
        </section>
      </LazyLoad>

      <section className={homeStyles.about} id="about">
        <div className={homeStyles.portraitContainer}>
          <LazyLoad height={400}>
            <img src="/images/PortraitSquare.jpg" alt=" headshot." />
          </LazyLoad>
        </div>
        <div className={homeStyles.copy}>
          <h2>About me</h2>
          <p>
            Hello! My name is Dr Vinayak Adimule, and I am a chemistry professor  situated in
            Hubli, Karnataka.
          </p>
          <p>
            Professionally, I have  thirteen years of research experience at different R&D organisations of
            TATA (Advinus), Astra Zeneca India, Trans Chem etc. Specialized in the area of
            medicinal chemistry (Anticancer Drugs), Nano science and Technology, Material
            Chemistry and Pharmaceutical Chemistry.
          </p>
          <p>
            I have published more than 60 research
            article in National and International. Board member for more than 20 reputed
            societies overall world, Attended 40 than national and international conferences.

          </p>
          <p>
            Presently working as HOD and Assistant Professor and Dean R&D Angadi Insitute of technolgy and management
            Belagavi, Karnataka, India and principle
            investigator for Government of India and Government of Karnataka for major
            sponsored project.
          </p>
        </div>
      </section>
      <section className="grey-background">
        {/* <div className={homeStyles.skills}> */}
        <div class="wrapper" style={{textAlign:"center" }}>
          <br></br>
            <h2>Research Areas</h2>
            <ul>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                Functional Nanomaterials
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}} >
                Nanocomposites 
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                
                  <abbr title="Optical properties of nanocomposites">Optical properties of NC</abbr>
                
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                Electrical properties of
                  <abbr title=" nanocomposites"> NC</abbr>
                  
                
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
               Ligand doping to               
                  <abbr title=" Rare earth nanocommposite"> REN </abbr>
                
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}} >
                Rare Earth MetalComplexes
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                Co-Precipitation Synthesis of <abbr title="Rare earth metals">REM</abbr>
              </li>
              
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                Characterization of
                  <abbr title=" Rare earth metals"> REM</abbr>
                
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                <abbr title="Photovoltaic Characteristics o Rare earth nanocommposite"> Photovoltaic Characteristics </abbr>
              </li>
              
              <li style={{fontSize:"1.2em" , color:"purple"}} >
                               
                  <abbr title="Optical
                Properties of Rare earth metals">Optical
                Properties of REM </abbr>
                              
              </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                <abbr title="Synthesis of Rare earth metals">Synthesis of REM
                  </abbr>              
                  </li>
              <li style={{fontSize:"1.2em" , color:"purple"}}>
                
                  <abbr title="Medicinal properties of Rare earth metals">Medicinal properties of REM
                  </abbr>
                  
                
              </li>
              
              </ul>
          <div className="">
            <br></br>
            <h2>Computer Skills</h2>
            
              <ul>
              <li style={{fontSize:"1.2em" , color:"green"}}>
                 ACD Chemdraw 
              </li>
              <li style={{fontSize:"1.2em" , color:"green"}} >
                Sci Finder
              </li>
              <li style={{fontSize:"1.2em" , color:"green"}} >
                Navision Axapta
              </li>
              </ul>
          </div>
        </div>
        <div className = "current"></div>
<br>
</br>
      </section>
      
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
    </>
  );
}
