import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Projects">
        <li>Projects</li>
      </Link>
      <Link to="/Videos">
        <li>Videos</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
    </nav>
  );
};

export default Menu;
