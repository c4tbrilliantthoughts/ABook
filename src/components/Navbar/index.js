import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <img src={Logo} width="180" height="45" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
