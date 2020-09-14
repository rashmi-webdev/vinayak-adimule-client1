import Link from "next/link";

// import data
import NAV_BAR_DATA from "./nav-bar.data";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarData: NAV_BAR_DATA,
    };
  }

  render() {
    const { navBarData } = this.state;
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
}

export default NavBar;
