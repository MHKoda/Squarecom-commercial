import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import ArboGauche from "../../Various/ArboGauche";
import Test1 from "../../../medias/picto-id.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
import Vignettes from "../../Various/Vignettes";

const IdVisu = () => {
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
                service_titre = 'On vous remarque, on vous contacte !'
                service_desc = 'Logo, charte graphique, couleur, pictogrammes, enveloppes… Votre identité visuelle, c’est ce qui vous représente tout simplement. Elle vous permet d’être connu et reconnu, d’être différent et attirant. Elle doit être harmonieuse au quotidien, se faire sentir sur chaque aspect de votre stratégie marketing. Elle doit vous différencier de vos concurrents afin de fidéliser votre cible.'
                service_picto = '/src/medias/picto-id.png'
            />
            }
            <ArboGauche title = 'Identité visuelle'/>
            <AccordeonProjets thumbnail_proj='/src/medias/mlogo-bourduge.jpg' alt='logo christophe bourduge' rubrique1='Logo' rubrique2='Charte graphique' rubrique3='' rubrique4=''/>
            <AffichProj />
            <BoutonDecouvr/>
            <Vignettes />
        </div>
    )
}

export default IdVisu