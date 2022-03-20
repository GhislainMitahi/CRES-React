import React from "react";
import { Link } from "react-router-dom";
import team1 from "../Images/team1.png";

const Equipe = ()=>{
    return (
        <div className="equipe pb-5">
            <div className="container">
                <div className="row">
                    <div>
                        <img src={team1} height="500px" />
                    </div>
                    <div>
                        <div  className="pl-2">
                            <h4 className="nav-link2">JACQUES NDAVARO</h4>
                            <h4 className="title2">Coordinateur</h4>
                        </div>
                        <div className="team1">
                            <button className="btn btn-light">←</button>
                            <button className="btn btn-light ml-1">→</button>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipe