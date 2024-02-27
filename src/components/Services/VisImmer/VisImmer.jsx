import React, { useEffect, useState } from "react";
import Presentation from "../../Page_services/Presentation";
import ArboGauche from "../../Various/ArboGauche";
import Test1 from "../../../medias/picto-print.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
import Vignettes from "../../Various/Vignettes";

const VisImmer = () => {
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
                service_titre = 'Une vitrine interactive'
                service_desc = 'Vous souhaitez pouvoir donner accès à votre lieu de travail, montrer les richesses d&#39;un lieu de culture, ou même travailler sur votre image de marque, où que vous soyez ? Les visites immersives que vous propose SQUARECOM c&#39;est tout ça à la fois ! Nous vous proposons de scanner vos locaux pour les recréer virtuellement et ainsi vous donner accès à votre environnement de travail quel que soit l&#39;endroit où vous êtes.'
                service_picto = '/src/medias/picto-print.png'
            />
            }
            <ArboGauche title = 'Visite immersive'/>
            <AccordeonProjets thumbnail_proj='/src/medias/texture-02.jpg' alt='texture hachures orangées' rubrique1='Scan 3D' rubrique2='Mise à disposition' rubrique3='' rubrique4=''/>
            <AffichProj />
            <BoutonDecouvr/>
            <Vignettes />
        </div>
    )
}

export default VisImmer