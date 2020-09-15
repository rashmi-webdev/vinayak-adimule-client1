import Link from "next/link";

// import { useState, useEffect } from "react";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export default function ConditionalCTA() {
  const router = useRouter();

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isMobile = useMediaQuery(450);

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
