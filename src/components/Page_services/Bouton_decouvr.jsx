import React from "react";
import { Link } from "react-router-dom";

const Bouton_decouvr = () => {
    return (
        <div className="container containerBouton">
            <p><Link to={'/archive-projets'}>TOUT DECOUVRIR</Link></p>
        </div>
    )
}

export default Bouton_decouvr