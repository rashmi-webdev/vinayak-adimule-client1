import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/layout-component";

export default function Custom404() {
  return (
    <Layout contact>
      <Head>
        <title>Irene Truong | Web Developer</title>
      </Head>
      <section className="error-section">
        <h1>Looks like the page you're looking for doesn't exist.</h1>
        <Link href="/">
          <a className="btn-primary">Go to Home Page</a>
        </Link>
      </section>
    </Layout>
  );
}
