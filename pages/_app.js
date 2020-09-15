import "../styles/globals.scss";
import Layout from "../components/layout/layout-component.jsx";
// import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    // <AnimatePresence exitBeforeEnter>
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
    // </AnimatePresence>
  );
};
export default MyApp;
