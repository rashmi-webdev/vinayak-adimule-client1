import Head from "next/head";

import Layout from "../components/layout/layout-component";

// using link
import Link from "next/link";

// importing components
import SocialIcons from "../components/social-icons/social-icons-component";

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
        <div className="hero-image">
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
        </div>
      </section>
      <section className={homeStyles.about}>
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
      <section className="skills">
        <div className="current">
          <h2>Fluent in</h2>
        </div>
        <div className="future">
          <h2>Levelling up on</h2>
        </div>
      </section>
    </Layout>
  );
}
