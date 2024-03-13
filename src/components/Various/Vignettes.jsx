import React from "react";
import { Link } from "react-router-dom";

const Vignettes = () => {
    // Récupérer l'URL actuelle
    let urlActuelle = window.location.href;

    // Définir un tableau d'objets représentant chaque vignette avec son lien et son URL associée
    const vignettes = [
        { url: '/print', imgSrc: '/src/medias/print_img.jpg', alt: 'print_vignette' },
        { url: '/identite-visuelle', imgSrc: '/src/medias/indentite-v.jpg', alt: 'print_vignette' },
        { url: '/dev-web-logiciel', imgSrc: '/src/medias/dev-web-logiciel-v1.jpg', alt: 'print_vignette' },
        { url: '/visite-immersive', imgSrc: '/src/medias/visite-immersive-V1.jpg', alt: 'print_vignette' },
        { url: '/motion', imgSrc: '/src/medias/motion.jpg', alt: 'print_vignette' },
        { url: '/marquage-publicitaire', imgSrc: '/src/medias/marquage.jpg', alt: 'print_vignette' },
        { url: '/reseaux-referencement', imgSrc: '/src/medias/reseau-referencement-v4.jpg', alt: 'print_vignette' },
        { url: '/goodies', imgSrc: '/src/medias/goodies-V1.jpg', alt: 'print_vignette' },
    ];

if (urlActuelle === "http://localhost:5173/") {

    return (
        <div className="container containerVignettes">
        <ul>
            {vignettes.map((vignette) => (
                <li key={vignette.id} className={urlActuelle === `http://localhost:5173${vignette.url}` ? "hidden" : ""}>
                    <Link to={vignette.url}>
                        <img src={vignette.imgSrc} alt={vignette.alt} />
                    </Link>
                </li>
            ))}
            <li className="vignette9 hidden">
                <img src="/src/medias/texture-02.jpg" alt="texture hachures oranges" />
            </li>
        </ul>
    </div>
    )
} else {
    return (
            <div className="container containerVignettes2">
                <ul>
                    {vignettes.map((vignette) => (
                        <li key={vignette.id} className={urlActuelle === `http://localhost:5173${vignette.url}` ? "hidden" : ""}>
                            <Link to={vignette.url}>
                                <img src={vignette.imgSrc} alt={vignette.alt} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}
}

export default Vignettes;