import Link from "next/link";

export default function SeeMoreProjects() {
  return (
    <>
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
    </>
  );
}
