import React from "react";

const AccordeonProjets = ({ thumbnail_proj, alt, rubriques, formats, supports, change, intitule1, intitule2 }) => {

    return (
        <div className="container">
            <div className="texture-noire">
                    <img src="/src/medias/texture_titre2.jpg" alt="texture hachures noire à gauche de la section accordeon" />
            </div>
            <div className="texture-orange">
                <img src="/src/medias/texture_titre2_orange.jpg" alt="texture hachures orange à droite de la section accordeon" />
            </div>
            <div className="containerImgAccor">
                <div className="thumbnail-proj">
                    <img src={thumbnail_proj} alt={alt} />
                </div>
                <div className="containerAccordeon">
                    <ul className="accordeon">
                        {rubriques.map((rubrique, index) => (
                            <li key={rubrique.id}>
                                <input type="radio" name="accordeon" id={`first-${index}`} />
                                <label htmlFor={`first-${index}`} onClick={() => change(index)}>
                                    <div>
                                        <span className="plus">+</span>
                                        <span> {rubrique}</span>
                                    </div>
                                    <span className="ferme">&#62;</span>
                                </label>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <p><strong>{intitule1} : </strong>{formats[index]}</p>
                                        </li>
                                        <li>
                                            <p><strong>{intitule2} : </strong>{supports[index]}</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccordeonProjets