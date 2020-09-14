import Link from "./Link";
import { useState } from "react";
import { useRouter } from "next/router";

// import { motion } from "framer-motion";

// import data
import NAV_BAR_DATA from "./nav-bar.data";

export default function NavBar(props) {
  const router = useRouter();
  const [navBarData, setNavBarData] = useState(NAV_BAR_DATA);
  return (
    // <motion.div exit={{ opacity: 0 }}>
    <nav className="header-nav nav-wrapper" id="top">
      <div className="logo-container">
        <img src="/images/logo-light-bg.svg" alt="" />
      </div>

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
    // </motion.div>
  );
}
