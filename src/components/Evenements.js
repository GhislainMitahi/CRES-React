import React from "react";
import { Link } from "react-router-dom";

const Evenements = () => {
  return (
    <div className="evenements">
      <div className="container">
        <div className="row pt-5">
          <div className="col-2">
            <ul className="menu2 ">
              <li className="nav-link ">
                <Link className="nav-link2">2020</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">2019</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">2018</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">2017</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">2016</Link>
              </li>
              <li className="nav-link ">
                <Link className="nav-link2">2015</Link>
              </li>
            </ul>
          </div>
          <div className="col-8">
              <h1 className="title3">2020</h1>
              <ul >
                  <li> CRES got certified as a national center of innovation</li>
                  <li>Ujuzi got launched for training in programming</li>
                  <li>Virtus</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Evenements;
