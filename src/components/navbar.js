import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", name: "صفحه‌ی اصلی", exact: true },
  { to: "/vendors", name: "رستوران‌ها", exact: false },
];

const Navbar = () => {
  return (
    <nav className="Navbar">
      {navLinks.map((navLink) => {
        return (
          <NavLink
            to={navLink.to}
            exact={navLink.exact}
            className="Navbar__item"
            activeClassName="Navbar__item-active"
            key={navLink.name}
          >
            {navLink.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
