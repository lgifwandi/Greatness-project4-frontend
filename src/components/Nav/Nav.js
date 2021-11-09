import React from "react";
import { Wrapper } from "./styles";
import {Link} from 'react-router-dom';

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
      title: "watched",
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
        <Link id="logo" to="/">
          {links.logo.title}
        </Link>
        <ul className="list">
          <li className="nav-links">
            <Link className="links" to={links.home.link}>
              {links.home.title}
            </Link>
          </li>
          <li className="nav-links">
            <Link className="links" to={links.watching.link}>
              {links.watching.title}
            </Link>
          </li>
          <li className="nav-links">
            <Link className="links" to={links.list.link}>
              {links.list.title}
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Nav;
