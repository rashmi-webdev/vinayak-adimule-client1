import Link from "next/link";

import { useRouter } from "next/router";

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

          <a href="#top" className="top" aria-label="Click to scroll to top">
            <img src="/images/scroll-up-arrow.svg" alt="" className="arrow" />
            <p>Back to top</p>
          </a>
        </aside>
      ) : (
        <aside className="grey-background">
          <h3>Want to get in touch?</h3>
          <Link href="/contact">
            <a className="btn-primary">Contact me</a>
          </Link>

          <a href="#top" className="top" aria-label="Click to scroll to top">
            <img src="/images/scroll-up-arrow.svg" alt="" className="arrow" />
            <p>Back to top</p>
          </a>
        </aside>
      )}
    </>
  );
}
