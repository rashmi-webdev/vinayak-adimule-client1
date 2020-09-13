import Head from "next/head";

import Layout from "../components/layout/layout-component";

// using link
import Link from "next/link";

// importing components

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Irene Truong | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
