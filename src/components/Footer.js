import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="container pt-3">
                <div className="text-center text-light">
                    <h5>CENTRE DE RECHERCHE ET D'EXPERTISE SCIENTIFIQUE</h5>
                    <div className="col-5">
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="text-left col-3">
                            <h5>LE CRES</h5><br/>
                            <p><Link className="nav-link2">Historique</Link></p>
                            <p><Link className="nav-link2">A Propos</Link></p>
                            <p><Link className="nav-link2">Association</Link></p>
                            <p><Link className="nav-link2">Administration</Link></p>
                            <p><Link className="nav-link2">FAQ</Link></p>
                        </div>
                        <div className="text-left col-3">
                            <h5>PROGRAMMES</h5><br/>
                            <p><Link className="nav-link2">Pamoja</Link></p>
                            <p><Link className="nav-link2">Mchango</Link></p>
                            <p><Link className="nav-link2">Formation</Link></p>
                            <p><Link className="nav-link2">Entrepreneuriat</Link></p>
                        </div>
                        <div className="text-left col-3">
                            <h5>ORGANISATION</h5><br/>
                            <p><Link className="nav-link2">Emploi</Link></p>
                            <p><Link className="nav-link2">Carrière</Link></p>
                            <p><Link className="nav-link2">Partenaires</Link></p>
                            <p><Link className="nav-link2">Financement</Link></p>
                            <p><Link className="nav-link2">Bourses d'études</Link></p>
                        </div>
                        <div className="text-left col-3">
                            <h5>PLAN DU SITE</h5><br/>
                            <p>Restez toujours informé</p>
                            <input type="email" name="email" placeholder="exemple@mail.com" className="form"/>
                            <input type="submit" value="Send" className="btn btn-light"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer