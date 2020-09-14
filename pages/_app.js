import "../styles/globals.scss";
import Layout from "../components/layout/layout-component.jsx"
const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
export default MyApp