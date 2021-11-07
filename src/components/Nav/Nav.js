import React from "react";
import { Wrapper } from "./styles";

const Nav = () => {
  const links = {
    logo: {
      title: "logo-name",
      link: "/",
    },
    home: {
      title: "home",
      link: "/",
    },
    watching: {
      title: "watching",
      link: "/watching",
    },
    list: {
      title: "list",
      link: "/watchlist",
    },
  };

  return (
    <Wrapper>
      <nav>
        <a id="logo" href="/">
          {links.logo.title}
        </a>
        <ul className="list">
          <li className="nav-links">
            <a className="links" href={links.home.link}>
              {links.home.title}
            </a>
          </li>
          <li className="nav-links">
            <a className="links" href={links.watching.link}>
              {links.watching.title}
            </a>
          </li>
          <li className="nav-links">
            <a className="links" href={links.list.link}>
              {links.list.title}
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Nav;
