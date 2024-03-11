import React, {useEffect, useState} from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const AffichProj = () => {

    const [showModal, setShowModal] = useState(false)

    // const [dataPrint, setDataPrint] = useState([])

    if(showModal){
        document.body.classList.add('active-modale')
    }else{
        document.body.classList.remove('active-modale')
    }

    // useEffect(() => {
    //     let query = `*[_type == 'projet'`;

    //     if (rubrique) {
    //         query += ` && rubrique->nomrubrique == "${rubrique}"`
    //     }

    //     query += `] | order(nomproj asc)  {
    //         nomproj,
    //         client->{nomclient},
    //         rubrique->{nomrubrique},
    //         imageproj {
    //           asset->{url}
    //         },
    //         altimage,
    //         slugproj{current}
    //     }`;

    //     defineCliConfig.fetch(query)
    //         .then((data) => {
    //             setDataPrint(data);
    //         })
    //         .catch(error => console.error("Erreur lors de la récupération des données", error))
    // }, []);

    return (
        <div className="container containerArticle">
            <ul>
                <li>
                    <img src="/src/medias/carte-de-visite-tridon-carre.jpg" alt="carte de visite tridon" />
                    <button onClick={() => setShowModal(true)} className="afficher-projet"><span>Afficher le projet</span></button>
                </li>
            </ul>
            {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)} />, document.body)}
        </div>
    )
}

export default AffichProj