import React from "react";
import { Link } from "react-router-dom";
import slack from '../Images/slack.png';


const Navbar = ()=>{
    return (
        <div>
            <nav className="navbar navbar-dark bg-info">
               <div className="container">
                <Link className="navbar-brand"><img src={slack} /></Link>
                    <div className="navbar1">
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Joindre</button>
                    </div>
               </div>
                
            </nav>
            <div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1>Centre de Recherche et d'Expertise Scientifique</h1>
                                <p>Une innovation du Programme d'accompagnement des Etudiants Une solution au probleme d'inclusion social de la jeunesse pour la cration et l'implementation de la solution aux problemes de developpement economique et social aux problemes de developpement de la region du Nord-Kivu et de la RDc</p>
                            </div>
                            <div className="col-6">
                                <ul className="menu2">
                                    <li className="nav-link">A PROPOS</li>
                                    <li className="nav-link">HISTOIRE</li>
                                    <li className="nav-link">PARTENAIRE</li>
                                    <li className="nav-link">ASSOCIATION</li>
                                    <li className="nav-link">ADMINISTRATION</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;