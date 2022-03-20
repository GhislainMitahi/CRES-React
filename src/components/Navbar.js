import React from "react";
import { Link } from "react-router-dom";
import cres from "../Images/cres.PNG";

const Navbar = () => {
  return (
    <div className="navbar1">
      <nav className="navbar navbar-dark">
        <div className="container">
          <Link className="navbar-brand">
            <img className="logo" src={cres} />
          </Link>
          <div>
              <Link className="navbar-link nav-link1">Acceuil </Link>
              <Link className="navbar-link nav-link1">Le CRES </Link>
              <Link className="navbar-link nav-link1">Innovation </Link>
              <Link className="navbar-link nav-link1">Opportinutés </Link>
              <Link className="navbar-link nav-link1">Contact </Link>
          </div>
          <div className="">
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              JOINDRE
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
