import React, { useEffect, useState } from "react"
import Presentation from "../../Page_services/Presentation"
import ArboGauche from "../../Various/ArboGauche"
import Test1 from "../../../medias/picto-print.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
import Vignettes from "../../Various/Vignettes"
import defineCliConfig from "../../../../squarecomcommercial/sanity.cli"

const Print = () => {
    const [loader, setLoader] = useState(false)

    const [dataPrint, setDataPrint] = useState([])
    const [accordeonProjets, setAccordeonProjets] = useState([])
    const [indexImg, setIndexImg] = useState(0)

    useEffect(() => {
        if (Test1) {
            setLoader(true)
        }

        defineCliConfig.fetch(
            `*[_type == 'services' && nomservice == 'Print']{
                nomservice,
                descriptionservice,
                phraseaccroche,
                pictoservice {
                    asset->{url}
                  }
              }`
        ).then((data) => { setDataPrint(data)})
            .catch(error => console.error("Erreur lors de la récupération des données", error));

        defineCliConfig.fetch(
            `*[_type == 'rubrique' && service->nomservice == 'Print'] | order(nomrubrique asc){
                nomrubrique,
                format,
                support,
                tarif,
                imgillu{
                  asset->{url}
                },
                altimgillu
              }`
        ).then((data) => { 
            setAccordeonProjets(data);
        })
            .catch(error => console.error("Erreur lors de la récupération des données", error));

    }, [])

    const onChange = (numberIndex) => {
        setIndexImg(numberIndex)
    }

    return (
        <div>
            {!loader ? <p>Loading en cours</p> :
                <Presentation
                    service_titre={(dataPrint[0] !== undefined) ? (dataPrint[0].phraseaccroche) : ('')}
                    service_desc={(dataPrint[0] !== undefined) ? (dataPrint[0].descriptionservice[0].children[0].text) : ('')}
                    service_picto={`${dataPrint[0] !== undefined ? dataPrint[0].pictoservice.asset.url : ''}`}
                />
            }
            <ArboGauche 
                title={(dataPrint[0] !== undefined) ? (dataPrint[0].nomservice) : ('')} 
            />
            {
            <AccordeonProjets
                thumbnail_proj={accordeonProjets[indexImg]?.imgillu?.asset?.url || ''}
                alt={accordeonProjets[0]?.altimgillu || ''}
                rubriques={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.nomrubrique)}
                formats={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.format)}
                supports={accordeonProjets.slice(0, accordeonProjets.length).map(projet => projet.support)}
                change={onChange}
                intitule1={'Formats'}
                intitule2={'Supports'}
            />
            }
            <AffichProj 
                service={'Print'}
            />
            <BoutonDecouvr />
            <Vignettes />
        </div>
    )
}

export default Print