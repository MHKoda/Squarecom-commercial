import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import Arbo_gauche from "../../Various/Arbo_gauche";
import Test1 from "/src/medias/picto-marquage.png"
import Accordeon_projets from "../../Page_services/Accordeon_projets"
import Affich_proj from "../../Page_services/Affich_proj"
import Bouton_decouvr from "../../Page_services/Bouton_decouvr"
import Vignettes from "../../Various/Vignettes";

const Goodies = () => {
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
                service_titre = 'Partagez votre univers !'
                service_desc = 'Il est important de réaliser que les réseaux sociaux s&#39;utilisent très différemment d&#39;un point de vue professionnel que personnel. Ils sont une réelle opportunité et vous ne pouvez vous permettre de passer à côté. Ils vous permettent une interaction rapide et massive avec vos clients et vos prospects, gratuitement ou à moindre coût. Un plan d&#39;action adaptée à votre cible est donc nécessaire. Dans le même temps, votre vitrine en ligne doit s&#39;accompagner d&#39;un référencement efficace si vous souhaitez apparaitre dès les premières pages des moteurs de recherches.'
                service_picto = '/src/medias/picto-marquage.png'
            />
            }
            <Arbo_gauche title = 'Goodies'/>
            <Accordeon_projets thumbnail_proj='/src/medias/flyercentresociallescharmilles.jpg' alt='flyer pour le centre social les charmilles' rubrique1='Gourdes' rubrique2='Stickers' rubrique3='Casquettes'  rubrique4=''/>
            <Affich_proj />
            <Bouton_decouvr/>
            <Vignettes />
        </div>
    )
}

export default Goodies