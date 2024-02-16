import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import Arbo_gauche from "../../Various/Arbo_gauche";
import Test1 from "/src/medias/picto-marquage.png"
import Accordeon_projets from "../../Page_services/Accordeon_projets"
import Affich_proj from "../../Page_services/Affich_proj"
import Bouton_decouvr from "../../Page_services/Bouton_decouvr"
import Vignettes from "../../Various/Vignettes";

const Res_ref = () => {
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
                service_titre = 'Dans l&#39;ère du temps, tout le temps !'
                service_desc = 'Que vous vous déplaciez en moto, en voiture, en véhicule utilitaire ou en avion, le marquage de véhicule est partie intégrante de votre communication. Vous avez investi dans des véhicules pour votre entreprise, et ceux-ci tournent à plein régime. Pourquoi ne pas en faire une solution de communication mobile et rentable à plein temps ? Votre véhicule sera vu plus de 2 millions de fois par an, à raison d&#39;une heure de route par jour ouvré. Sans limite territoriale, un marquage de véhicule à l&#39;image de votre entreprise vous apportera une augmentation de clients et donc de chiffre d&#39;affaires. Déclinable pour tout type de charte graphique et à tout type de véhicule.'
                service_picto = '/src/medias/picto-marquage.png'
            />
            }
            <Arbo_gauche title = 'Réseaux et référencement'/>
            <Accordeon_projets thumbnail_proj='/src/medias/gasoft.jpg' alt='site internet de gasoft' rubrique1='Gestion de contenu' rubrique2='Référencement'  rubrique3='' rubrique4=''/>
            <Affich_proj />
            <Bouton_decouvr/>
            <Vignettes />
        </div>
    )
}

export default Res_ref