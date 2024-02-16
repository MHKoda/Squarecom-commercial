import React, { useEffect } from "react";

const Accordeon_projets = ({ thumbnail_proj, alt, rubriques, formats, supports}) => {
    useEffect(() => {
        console.log("tsttt", rubriques, formats)
    }, [rubriques, formats, supports])

    return (
        <div className="container containerImgAccor">
            <div className="texture-noire z-1">
                <img src="/src/medias/texture_titre2.jpg" alt="" />
            </div>
            <div className="texture-orange">
                <img src="/src/medias/texture_titre2_orange.jpg" alt="" />
            </div>
            <div className="thumbnail-proj">
                <img src={thumbnail_proj} alt={alt} />
            </div>

            <div className="containerAccordeon">
                <ul className="accordeon">
                {rubriques.map((rubrique, index) => (
                        <li key={index}>
                        <input type="radio" name="accordeon" id={`first-${index}`} />
                        <label htmlFor={`first-${index}`}>
                            <div>
                                <span className="plus">+</span>
                                <span> {rubrique}</span>
                            </div>
                            <span className="ferme">&#62;</span>
                        </label>
                        <div className="content">
                            <ul>
                                <li>
                                    <p ><strong>Formats :</strong>{formats[index]}</p>
                                    </li>
                                <li>
                                    <p><strong>Supports :</strong>{supports[index]}</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Accordeon_projets