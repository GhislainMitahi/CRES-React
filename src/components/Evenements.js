import React from "react";
import { Link } from "react-router-dom";

const Evenements = () => {
  return (
    <div className="evenements">
      <div className="container">
        <div className="row pt-2">
          <div className="col-2">
            <ul className="menu2 ">
              <li className="nav-link ">
                <Link className="nav-link2">A PROPOS</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">HISTOIRE</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">PARTENAIRE</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">ASSOCIATION</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">ADMINISTRATION</Link>
              </li>
            </ul>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
};
export default Evenements;
