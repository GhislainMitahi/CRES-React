import React from "react";
import { Link } from "react-router-dom";

const Banner = ()=>{
    return (
        <div className="banner">
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="title1">Centre de Recherche et d'Expertise Scientifique</h1><br/>
                                <p className="details1">Une innovation du Programme d'accompagnement des Etudiants Une solution au probleme d'inclusion social de la jeunesse pour la cration et l'implementation de la solution aux problemes de developpement economique et social aux problemes de developpement de la region du Nord-Kivu et de la RDc</p>
                            </div>
                            <div className="col-6">
                                <ul className="menu2 offset-8">
                                    <li className="nav-link "><Link className="nav-link2">A PROPOS</Link></li>
                                    <li className="nav-link "><Link className="nav-link2">HISTOIRE</Link></li>
                                    <li className="nav-link "><Link className="nav-link2">PARTENAIRE</Link></li>
                                    <li className="nav-link "><Link className="nav-link2">ASSOCIATION</Link></li>
                                    <li className="nav-link "><Link className="nav-link2">ADMINISTRATION</Link></li>
                                </ul>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Banner