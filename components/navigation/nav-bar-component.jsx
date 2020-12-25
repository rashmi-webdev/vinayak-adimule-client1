import Link from "./Link";
import { useState } from "react";
import { useRouter } from "next/router";

// import data
import NAV_BAR_DATA from "./nav-bar.data";

export default function NavBar(props) {
  const router = useRouter();
  const [navBarData, setNavBarData] = useState(NAV_BAR_DATA);
  return (
    <nav className="header-nav nav-wrapper">
      <Link href="/">
        <div className="logo-container">
          {router.pathname == "/contact" ? (
            <img src="/images/logoOnContact.svg" alt=" logo." />
          ) : (
            <img src="/images/logo-light-bg.svg" alt=" logo." />
          )}
        </div>
      </Link>

      <ul className={`${router.pathname !== "/" ? "lighten-nav" : ""}`}>
        {navBarData.map(({ id, href, displayName }) => (
          <li key={id}>
            <Link href={href}>
              <a>{displayName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
