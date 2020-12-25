import Head from "next/head";

import LazyLoad from "react-lazyload";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Dr. Vinayak Adimule | Contact</title>
      </Head>
      <LazyLoad height={300}>
        <div className="contact-hero"></div>
      </LazyLoad>
      <section className="grey-background contact-card-container">
        <motion.div
          className="white-contact-card "
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <h1>Contact</h1>
          <h3>Current location : Hubli, Karnataka, IN</h3>
          <h3>Phone number :+919481268717 , +918660946136 </h3>
         <h3>Email me at : <a href="mailto:adimulevinayak@yahoo.in">adimulevinayak@yahoo.in</a>  ,<a href="mailto:vinayakadimule2006@gmail.com">vinayakadimule2006@gmail.com</a>   </h3>
        </motion.div>
      </section>
    </>
  );
}
