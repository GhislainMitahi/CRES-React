import React from "react";
import { Link } from "react-router-dom";
import cres from '../Images/cres.PNG';


const Navbar = ()=>{
    return (
        <div className="navbar1">
            <nav className="navbar navbar-dark">
               <div className="container">
                <Link className="navbar-brand"><img className="logo" src={cres} /></Link>
                    <div className="navbar1">
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Joindre</button>
                    </div>
               </div>
                
            </nav>
        </div>
    )
}

export default Navbar;