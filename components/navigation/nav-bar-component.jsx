import Link from "./Link";
import { useState } from "react";

// import data
import NAV_BAR_DATA from "./nav-bar.data";

export default function NavBar(props) {
  const [navBarData, setNavBarData] = useState(NAV_BAR_DATA);
  return (
    <>
      <nav className="header-nav nav-wrapper" id="top">
        <div className="logo-container">
          <img src="/images/logo-light-bg.svg" alt="" />
        </div>
        <ul>
          {navBarData.map(({ id, href, displayName }) => (
            <li key={id}>
              <Link href={href}>
                <a>{displayName}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
