import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ConditionalCTA() {
  const router = useRouter();
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = true ? width <= 450 : false;

  return (
    <>
      {router.pathname == "/" ? (
        <aside>
          <h3>Want to see more?</h3>
          <Link href="/projects">
            <a className="btn-primary">View all projects</a>
          </Link>

          <a href="#top" className="top" aria-label="Click to scroll to top">
            {isMobile ? (
              <img src="/images/white-arrow.svg" alt="" className="arrow" />
            ) : (
              <img src="/images/navy-arrow.svg" alt="" className="arrow" />
            )}
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
            {isMobile ? (
              <img src="/images/white-arrow.svg" alt="" className="arrow" />
            ) : (
              <img src="/images/navy-arrow.svg" alt="" className="arrow" />
            )}
            <p>Back to top</p>
          </a>
        </aside>
      )}
    </>
  );
}
