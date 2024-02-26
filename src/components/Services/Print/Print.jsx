import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import Arbo_gauche from "../../Various/Arbo_gauche";
import Test1 from "/src/medias/picto-print.png"
import Accordeon_projets from "../../Page_services/Accordeon_projets"
import Affich_proj from "../../Page_services/Affich_proj"
import Bouton_decouvr from "../../Page_services/Bouton_decouvr"
import Vignettes from "../../Various/Vignettes";
import defineCliConfig from "../../../../squarecomcommercial/sanity.cli";

const Print = () => {
    const [loader, setLoader] = useState(false)

    const [dataPrint, setDataPrint] = useState([])
    const [accordeonProjets, setAccordeonProjets] = useState([])

    useEffect(() => {
        if (Test1) {
            setLoader(true)
        }

        defineCliConfig.fetch(
            `*[_type == 'services' && nomcat == 'Print']{
                nomcat,
                descriptionservice,
                phraseaccroche,
                pictoservice {
                    asset->{url}
                  }
              }`
        ).then((data) => { setDataPrint(data)})
            .catch(error => console.error("Erreur lors de la récupération des données", error));

        defineCliConfig.fetch(
            `*[_type == 'projet' && depliantservice == 'print'] | order(rubriquesprint asc){
                rubriquesprint,
                imageproj{
                  asset->{url}
                },
                altimage,
                supportproj,
                formatproj,
              }`
        ).then((data) => { setAccordeonProjets(data)})
            .catch(error => console.error("Erreur lors de la récupération des données", error));

    }, [])

    return (
        <div>
            {!loader ? <p>Loading en cours</p> :
                <Presentation
                    service_titre={(dataPrint[0] !== undefined) ? (dataPrint[0].phraseaccroche) : ('')}
                    service_desc={(dataPrint[0] !== undefined) ? (dataPrint[0].descriptionservice[0].children[0].text) : ('')}
                    service_picto={`${dataPrint[0] !== undefined ? dataPrint[0].pictoservice.asset.url : ''}`}
                />
            }
            <Arbo_gauche title={(dataPrint[0] !== undefined) ? (dataPrint[0].nomcat) : ('')} />
            {
            <Accordeon_projets
                thumbnail_proj={accordeonProjets[0]?.imageproj?.asset?.url || ''}
                alt={accordeonProjets[0]?.altimage || ''}
                rubriques={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.rubriquesprint)}
                formats={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.formatproj)}
                supports={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.supportproj)}
            />
            }
            {/* Code de base d'accordeonProjets

            {accordeonProjets.map((projet, index) => (
            
                < Accordeon_projets
                    thumbnail_proj={`${accordeonProjets[0] !== undefined ? accordeonProjets[0].imageproj.asset.url : ''}`}
                    alt={(accordeonProjets[0] !== undefined) ? (accordeonProjets[0].altimage) : ('')}
                    rubrique1={(accordeonProjets[0] !== undefined) ? (accordeonProjets[0].rubriquesprint) : ('')}
                    rubrique2={(accordeonProjets[1] !== undefined) ? (accordeonProjets[1].rubriquesprint) : ('')}
                    rubrique3={(accordeonProjets[2] !== undefined) ? (accordeonProjets[2].rubriquesprint) : ('')}
                    rubrique4={(accordeonProjets[3] !== undefined) ? (accordeonProjets[3].rubriquesprint) : ('')}
                />
                ))
            } 
            */}
            <Affich_proj />
            <Bouton_decouvr />
            <Vignettes />
        </div>
    )
}

export default Print