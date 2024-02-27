import React from "react";
import { Link } from "react-router-dom";

const BoutonDecouvr = () => {
    return (
        <div className="container containerBouton">
            <p><Link to={'/archive-projets'}>TOUT DECOUVRIR</Link></p>
        </div>
    )
}

export default BoutonDecouvr