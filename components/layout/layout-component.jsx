import Head from "next/head";
// import Link from "next/link";

// import components that persist
import NavBar from "../navigation/nav-bar-component";

import PersistFooter from "../footer/footer-component";
import ConditionalCTA from "../see-more/see-more-projects.component";

const name = "Irene Truong";
export const siteTitle = "Irene Truong | Web Developer";

export default function Layout({ children, home, contact }) {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Irene Truong is a Web Developer specializing in Front-End servicing the Toronto and Greater Toronto Area."
        />
        {/* <meta
          name="keywords"
          content="Front-End, Front End Developer, Web Developer, Irene Truong, Developer"
        />
        <meta name="author" content="Irene Truong" /> */}

        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header>
        <NavBar />
        {/* {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>{children}</main>
      {!contact && <ConditionalCTA />}
      {/* </div> */}
      <PersistFooter />
    </>
  );
}
