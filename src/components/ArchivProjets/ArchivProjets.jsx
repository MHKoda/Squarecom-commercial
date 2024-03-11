import React, { useEffect, useState } from "react";
import defineCliConfig from "../../../squarecomcommercial/sanity.cli"
import { createPortal } from "react-dom";
import ModalContent from "../Page_services/ModalContent";

const ArchivProjets = () => {

    const [dataPrint, setDataPrint] = useState([])

    const [showModal, setShowModal] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState(null);
    const [nomRubriques, setNomRubriques] = useState([]);
    const [rubrique, setRubrique] = useState('');


    const handleOpenModal = (projet) => {
        setSelectedProjet(projet);
    };

    if (showModal) {
        document.body.classList.add('active-modale')
    } else {
        document.body.classList.remove('active-modale')
    }

    useEffect(() => {

        defineCliConfig.fetch(
            `*[_type == 'projet'] | order(nomproj asc)  {
                rubrique->{nomrubrique},
            }`
        )
            .then((data) => {
                const rubriques = [...new Set(data.map((projet) => projet.rubrique.nomrubrique))];
                setNomRubriques(rubriques);
            })
            .catch(error => console.error("Erreur lors de la récupération des rubriques", error));
    }, []);

    useEffect(() => {
        let query = `*[_type == 'projet'`;

        if (rubrique) {
            query += ` && rubrique->nomrubrique == "${rubrique}"`;
        }

        query += `] | order(nomproj asc)  {
            nomproj,
            client->{nomclient},
            rubrique->{nomrubrique},
            imageproj {
              asset->{url}
            },
            altimage,
            slugproj{current}
        }`;

        defineCliConfig.fetch(query)
            .then((data) => {
                setDataPrint(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des données", error));
    }, [rubrique]);


    return (
        <div className="container archiv-projet">
            <h1 id="titre-liste-projets">Listes des projets</h1>
            <select value={rubrique} onChange={(e) => setRubrique(e.target.value)}>
                <option value="">Toutes les rubriques</option>
                {nomRubriques.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <ul>
                {dataPrint.map((projet, index) => (
                    <li key={`list-${index}`}>
                        {projet.nomproj}
                        <img style={{ width: '50px' }} src={projet.imageproj.asset.url} alt={projet.altimage} />
                        <button onClick={() => { handleOpenModal(projet); setShowModal(true) }} className="afficher-projet">
                            <span>Afficher le projet</span>
                        </button>
                        {showModal && createPortal(<ModalContent data={selectedProjet} closeModal={() => setShowModal(false)} />, document.body)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArchivProjets