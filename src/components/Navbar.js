import React from "react";
import { Link } from "react-router-dom";
import slack from '../Images/slack.png';


const Navbar = ()=>{
    return (
        <div className="navbar1">
            <nav className="navbar navbar-dark">
               <div className="container">
                <Link className="navbar-brand"><img src={slack} /></Link>
                    <div className="navbar1">
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Joindre</button>
                    </div>
               </div>
                
            </nav>
        </div>
    )
}

export default Navbar;