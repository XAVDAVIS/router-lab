import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
    <Link to="/">
        <div className="nav-logo">iStocks</div>
    </Link>
    <Link to="/stocks">
        <div className="navLinks">Stocks</div>
    </Link>
    <Link to="/about">
        <div className="navLinks">About</div>
    </Link>
    </div>
  );
};

export default Nav;