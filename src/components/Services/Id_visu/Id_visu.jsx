import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import Arbo_gauche from "../../Various/Arbo_gauche";
import Test1 from "/src/medias/picto-id.png"
import Accordeon_projets from "../../Page_services/Accordeon_projets"
import Affich_proj from "../../Page_services/Affich_proj"
import Bouton_decouvr from "../../Page_services/Bouton_decouvr"
import Vignettes from "../../Various/Vignettes";

const Id_visu = () => {
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
            <Arbo_gauche title = 'Identité visuelle'/>
            <Accordeon_projets thumbnail_proj='/src/medias/mlogo-bourduge.jpg' alt='logo christophe bourduge' rubrique1='Logo' rubrique2='Charte graphique' rubrique3='' rubrique4=''/>
            <Affich_proj />
            <Bouton_decouvr/>
            <Vignettes />
        </div>
    )
}

export default Id_visu