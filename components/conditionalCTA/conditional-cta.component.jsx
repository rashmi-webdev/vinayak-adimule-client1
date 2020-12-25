import Link from "next/link";

import { useRouter } from "next/router";

import ScrollTopArrow from "./scroll-top-arrow-component";

export default function ConditionalCTA() {
  const router = useRouter();

  return (
    <>
      {router.pathname == "/" ? (
        <aside>
          <h2>Want to see more?</h2>
          <Link href="/publications">
            <a className="btn-primary">Publications</a>
          </Link>
          <Link href="/achievements">
            <a className="btn-primary">Achievements</a>
          </Link>
          <Link href="/publications">
            <a className="btn-primary">Education</a>
          </Link>
          <Link href="/publications">
            <a className="btn-primary">Professional experience</a>
          </Link>
          <Link href="/publications">
            <a className="btn-primary">Work Experience</a>
          </Link>
         
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == "/publications" ? (
        <aside className="grey-background">
          <h2>Want to get in touch?</h2>
          <Link href="/contact">
            <a className="btn-primary">Contact me</a>
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == "/contact" ? (
        <aside>
          <h2>Thanks for visiting! Want to view the site again? 😉</h2>
          <Link href="/">
            <a className="btn-primary">Go to home page</a>
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : null}
    </>
  );
}
