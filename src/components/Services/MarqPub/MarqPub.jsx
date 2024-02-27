import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import ArboGauche from "../../Various/ArboGauche";
import Test1 from "../../../medias/picto-marquage.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
import Vignettes from "../../Various/Vignettes";

const MarqPub = () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (Test1){
            setLoader(true)
        }
    }, [])

    return (
        <div>
            {!loader ? <p>Loading en cours</p> :
            <Presentation 
                service_titre = 'La visibilité sans frontière !'
                service_desc = 'Que vous vous déplaciez en moto, en voiture, en véhicule utilitaire ou en avion, le marquage de véhicule est partie intégrante de votre communication. Vous avez investi dans des véhicules pour votre entreprise, et ceux-ci tournent à plein régime. Pourquoi ne pas en faire une solution de communication mobile et rentable à plein temps ? Votre véhicule sera vu plus de 2 millions de fois par an, à raison d&#39;une heure de route par jour ouvré. Sans limite territoriale, un marquage de véhicule à l&#39;image de votre entreprise vous apportera une augmentation de clients et donc de chiffre d&#39;affaires. Déclinable pour tout type de charte graphique et à tout type de véhicule.'
                service_picto = '/src/medias/picto-marquage.png'
            />
            }
            <ArboGauche title = 'Marquage publicitaire'/>
            <AccordeonProjets thumbnail_proj='/src/medias/mockup-eco-beton-carre.jpg' alt='mokcup de roll up pour ecobeton' rubrique1='Marquage de véhicule' rubrique2='Marquage de vêtements' rubrique3='Enseigne' rubrique4=''/>
            <AffichProj />
            <BoutonDecouvr/>
            <Vignettes />
        </div>
    )
}

export default MarqPub