import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import ArboGauche from "../../Various/ArboGauche";
import Test1 from "../../../medias/picto-print.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
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
            <ArboGauche title={(dataPrint[0] !== undefined) ? (dataPrint[0].nomcat) : ('')} />
            {
            <AccordeonProjets
                thumbnail_proj={accordeonProjets[0]?.imageproj?.asset?.url || ''}
                alt={accordeonProjets[0]?.altimage || ''}
                rubriques={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.rubriquesprint)}
                formats={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.formatproj)}
                supports={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.supportproj)}
            />
            }
            <AffichProj />
            <BoutonDecouvr />
            <Vignettes />
        </div>
    )
}

export default Print