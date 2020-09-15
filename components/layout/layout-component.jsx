import Head from "next/head";
import { useRouter } from "next/router";

// transitions
import { motion } from "framer-motion";

// components
import NavBar from "../navigation/nav-bar-component";
import PersistFooter from "../footer/footer-component";
import ConditionalCTA from "../see-more/see-more-projects.component";

const name = "Irene Truong";
const description =
  "Irene Truong is a Web Developer specializing in Front-End servicing the Toronto and Greater Toronto Area.";
export const siteTitle = "Irene Truong | Web Developer";

export default function Layout({ children, home, contact }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Front-End, Front End Developer, Web Developer, Irene Truong, Developer, GTA Web Developer, Toronto Web Developer"
        />
        <meta name="author" content={name} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/OG_Image.jpg" />
        <meta property="og:url" content="https://irenetruong.com/"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="top">
        <NavBar />
      </header>

      <motion.div
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <main>{children}</main>
      </motion.div>

      {!contact && <ConditionalCTA />}
      <PersistFooter />
    </>
  );
}
