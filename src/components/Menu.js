import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <Link to="/">
        <li className="neon-button">Home</li>
      </Link>
      <Link to="/Projects">
        <li className="neon-button">Projects</li>
      </Link>
      <Link to="/Videos">
        <li className="neon-button">Videos</li>
      </Link>
      <Link to="/Contact">
        <li className="neon-button">Contact</li>
      </Link>
    </nav>
  );
};

export default Menu;
