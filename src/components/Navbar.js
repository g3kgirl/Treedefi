import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_img">
        <img
          src="https://treedefi.com/static/brand/logo.svg"
          className="navbar_logo"
        />
      </div>
      <div className="navbar_menu">
        <Link href="/" className="navbar_menu_links">
          Home
        </Link>
        <Link href="/" className="navbar_menu_links">
          NFTree
        </Link>
        <Link href="/" className="navbar_menu_links">
          Carbon Credits
        </Link>
        <Link href="/" className="navbar_menu_links">
          Initiatives
        </Link>
        <Link href="/" className="navbar_menu_links">
          Security
        </Link>
        <Link href="/" className="navbar_menu_links">
          Institution
        </Link>
        <Link href="/" className="navbar_menu_links">
          Contact Us
        </Link>
        <Link href="/" className="navbar_menu_links" id="button">
          WHITEPAPER
        </Link>
        <Link href="/" className="navbar_menu_links" id="button">
          LAUNCH APP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
