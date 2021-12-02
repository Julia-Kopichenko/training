import React from "react";
import {Link} from 'react-router-dom';

import "./NavButton.css";

const NavButton = ({ name }) => {
  return <Link to={`/${name}`}
    className="button">
    { name }
  </Link>
};

export default NavButton;