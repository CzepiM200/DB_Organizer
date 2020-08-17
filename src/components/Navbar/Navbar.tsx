import "./_navbar.scss";
import React, { FunctionComponent } from "react";

type NavbarProps = {};

export const Navbar: FunctionComponent<NavbarProps> = (props: any) => {
  return (
    <header className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">About</li>
        <li className="navbar__item">Menu</li>
      </ul>
    </header>
  );
};
