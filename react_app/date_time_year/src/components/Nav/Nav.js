import React from "react";

import { NavButton } from "..";

import "./Nav.css";

const Nav = () => {

    return (
    <div className="nav">
      <NavButton name="date"/>
      <NavButton name="number"/>
      <NavButton name="year"/>
    </div>
  )
};

export default Nav;