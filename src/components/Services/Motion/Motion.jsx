import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import Arbo_gauche from "../../Various/Arbo_gauche";
import Test1 from "/src/medias/picto-referencement.png"
import Accordeon_projets from "../../Page_services/Accordeon_projets"
import Affich_proj from "../../Page_services/Affich_proj"
import Bouton_decouvr from "../../Page_services/Bouton_decouvr"
import Vignettes from "../../Various/Vignettes";

const Motion = () => {
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
                service_titre = 'Dynamisez votre contenu !'
                service_desc = 'Que ce soit pour des besoins internes ou externes : une bonne vidéo rime avec un bon moment. Vous souhaitez proposer votre produit au plus grand nombre ? La vidéo est un des moyens les plus efficaces à l&#39;heure de l&#39;effervescence des réseaux sociaux. Vous souhaitez présenter un projet en interne et vous avez besoin d&#39;un support qui puisse être visionné lors de conférences ou de réunions ? La vidéo vous permet également d&#39;inviter votre spectateur de manière agréable et ludique.'
                service_picto = '/src/medias/picto-referencement.png'
            />
            }
            <Arbo_gauche title = 'Motion'/>
            <Accordeon_projets thumbnail_proj='/src/medias/affiche-estivale-neufchateau.jpg' alt='Affiche estivale' rubrique1= 'Vidéo promotionnelle' rubrique2='Vidéo institutionnelle' rubrique3='Vidéo explicative' rubrique4=''/>
            <Affich_proj />
            <Bouton_decouvr/>
            <Vignettes />
        </div>
    )
}

export default Motion