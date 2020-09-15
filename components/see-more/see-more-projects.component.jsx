import Link from "next/link";

import { useRouter } from "next/router";

import ScrollTopArrow from "./scroll-top-arrow-component";

export default function ConditionalCTA() {
  const router = useRouter();

  return (
    <>
      {router.pathname == "/" ? (
        <aside>
          <h3>Want to see more?</h3>
          <Link href="/projects">
            <a className="btn-primary">View all projects</a>
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == "/projects" ? (
        <aside className="grey-background">
          <h3>Want to get in touch?</h3>
          <Link href="/contact">
            <a className="btn-primary">Contact me</a>
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == "/contact" ? (
        <aside>
          <h3>Thanks for visiting! Want to check it out again? 😉</h3>
          <Link href="/">
            <a className="btn-primary">Go to Home Page</a>
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : null}
    </>
  );
}
