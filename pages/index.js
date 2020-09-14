import Head from "next/head";

import Layout from "../components/layout/layout-component";

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
  faPython,
  faFigma,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  faExpand,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

// using link
import Link from "next/link";

// importing components
import SocialIcons from "../components/social-icons/social-icons-component";
// import SeeMoreProjects from "../components/see-more/see-more-projects.component";

// importing styles
import homeStyles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Irene Truong | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section class={homeStyles.heroBackground}>
        {/* <div className="hero-image"> */}
        <div className="wrapper">
          <h1>
            Irene Truong is a web developer experienced in{" "}
            <span>
              building blocks of the internet in both start-up and corporate
              settings
            </span>
            .
          </h1>
          <Link href="/projects">
            <a className="btn-primary">View Projects</a>
          </Link>
          <div className={homeStyles.socialContainer}>
            <SocialIcons />
          </div>
        </div>
        <a
          href="#about"
          className="scroll-to-about"
          aria-label="Click to scroll to Irene's about section."
        >
          <img src="/images/scroll-down-arrow.svg" alt="" className="arrow" />
        </a>
        {/* </div> */}
      </section>
      <section className={homeStyles.about} id="about">
        <div className={homeStyles.portraitContainer}>
          <img src="/images/portrait.jpg" alt="Irene's headshot." />
        </div>
        <div className={homeStyles.copy}>
          <h2>About me</h2>
          <p>
            Hihi! My name is Irene, and I am a front-end developer situated in
            Toronto, Ontario.
          </p>
          <p>
            Professionally, I perform accessibility enhancements for websites
            and work with a ton of legacy code. I write in both React.js and
            Vue.js for more modern sites. This website is written in React.js ☺️
            I also bring professional experience working with Figma as part of
            my growing skillset.
          </p>
          <p>
            I have worked in both start-up and big corporation environments
            coding from scratch and working with content management systems
            (CMS) such as Sitecore. My flexibility and work ethic has allowed me
            to thrive in both capacities, pick up tech and tools quickly, and
            contribute meaningfully.
          </p>
          <p>
            Outside of coding, I am a self-proclaimed professional cat petter,
            play Fall Guys and Pokémon GO, and love to take short walks by
            nature's trails. I am also a fan of the MBTI personality test.
          </p>
        </div>
      </section>
      <section className="skills-background">
        <div className={homeStyles.skills}>
          <div className="current">
            <h2>Fluent in</h2>
            <ul>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faHtml5} />
                <p>HTML5</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faCss3Alt} />
                <p>CSS3</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faSass} />
                <p>SCSS/SASS</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faLess} />
                <p>Less</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faBootstrap} />
                <p>Bootstrap</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faJs} />
                <p>JavaScript</p>
              </li>
              <li>
                jQuery pic
                <p>jQuery</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faReact} />
                <p>React</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faVuejs} />
                <p>Vue</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faGit} />
                <p>Git</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faExpand} />
                <p>RWD</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faAccessibleIcon} />
                <p>Web accessibility</p>
              </li>
            </ul>
          </div>
          <div className="future">
            <h2>Levelling up on</h2>
            <ul>
              <li>
                REDUX PIC
                <p>Redux</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faPython} />
                <p>Python</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faFigma} />
                <p>Figma</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="featured-project">
        <h2>Featured Project</h2>
        <img src="/images/LHPreview.gif" alt="" />
        <h3>Lawson Heights</h3>
        <div className="featured-layout">
          <div className="project-description">
            <p>
              Client site built at Mobile Fringe. Front-end built with Vue.js to
              extract dynamic content from CMS. Utilizes Vuex for state
              management, and Vue-Router for routing.{" "}
            </p>
            <p className="tech-used">
              <strong>Used:</strong>Vue.js, Nuxt.js, HTML5, SCSS, Bootstrap,
              JavaScript, Responsive Web Design
            </p>
          </div>
          <a
            className="btn-secondary"
            href="https://mallatlawsonheights.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
        </div>
      </section>
    </Layout>
  );
}
