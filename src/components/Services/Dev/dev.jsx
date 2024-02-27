import React, { useEffect, useState } from "react"
import Presentation from "../../Page_services/Presentation"
import ArboGauche from "../../Various/ArboGauche"
import Test1 from "../../../medias/picto-print.png"
import AccordeonProjets from "../../Page_services/AccordeonProjets"
import AffichProj from "../../Page_services/AffichProj"
import BoutonDecouvr from "../../Page_services/BoutonDecouvr"
import Vignettes from "../../Various/Vignettes"

const Dev = () => {
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
                service_titre = 'Un outil indispensable et accessible par tous !'
                service_desc = 'Votre site Internet est indispensable pour que vos clients et prospects puissent vous voir sous votre meilleur jour. Il vous permet d&#39;améliorer votre visibilité et ainsi de vous faire gagner en notoriété. Le résultat direct est une croissance notable. Votre site vous permet également de comprendre les besoins de vos clients en créant avec eux une interaction. Ils seront alors convaincus et vous accorderont toute leur confiance. Suite à cela, SQUARECOM intégrera à votre stratégie les outils d&#39;aide à la conversion nécessaires pour améliorer les ventes et trouver un bon équilibre entre contenu mis en ligne et résultats générés. Deux types de site pour particuliers et professionnels: Sites vitrines, Sites commerciaux'
                service_picto = '/src/medias/picto-site.png'
            />
            }
            <ArboGauche title = 'Print'/>
            <AccordeonProjets thumbnail_proj='src/medias/betam.jpg' alt='site internet betam' rubrique1='Site e-commerce' rubrique2='Site vitrine' rubrique3='Logiciel tiers'  rubrique4=''/>
            <AffichProj />
            <BoutonDecouvr/>
            <Vignettes />
        </div>
    )
}

export default Dev