import React from "react";

import "./NavButton.css";

const NavButton = ({ name }) => {
  return <a 
    href="/date" 
    className="button">
    { name }
  </a>
};

export default NavButton;