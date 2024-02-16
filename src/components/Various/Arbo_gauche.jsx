import React from "react";

const Arbo_gauche = ({title}) => {
    return (
        <div id="gauche_relatif">
            <div id="titre_gauche">
                <h2>SQUARECOM</h2>
                <p className="arbo_gauche">| {title}</p>
            </div>
            <div id="image_gauche">
                <img src="/src/medias/texture_titre.jpg" alt="texture titre" />
            </div>
        </div>
    )
}

export default Arbo_gauche;