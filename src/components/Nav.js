import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
            <Link to="/stocks/:symbol">
                <div>STOCKS</div>
            </Link>
            <Link to="/stocks">
                <div>DASHBOARD</div>
            </Link>
        </div>
    );
};

export default Nav;