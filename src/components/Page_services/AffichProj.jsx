import React, {useState} from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const AffichProj = () => {

    const [showModal, setShowModal] = useState(false);

    if(showModal){
        document.body.classList.add('active-modale')
    }else{
        document.body.classList.remove('active-modale')
    }

    return (
        <div className="container containerArticle">
            <ul>
                <li>
                    <img src="/src/medias/carte-de-visite-tridon-carre.jpg" alt="carte de visite tridon" />
                    <button onClick={() => setShowModal(true)} className="afficher-projet"><span>Afficher le projet</span></button>
                </li>
                <li>
                    <img src="/src/medias/carte-de-visite-tridon-carre.jpg" alt="carte de visite tridon" />
                    <button onClick={() => setShowModal(true)} className="afficher-projet"><span>Afficher le projet</span></button>
                </li>
                <li>
                    <img src="/src/medias/carte-de-visite-tridon-carre.jpg" alt="carte de visite tridon" />
                    <button onClick={() => setShowModal(true)} className="afficher-projet"><span>Afficher le projet</span></button>
                </li>
            </ul>
            {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)} />, document.body)}
        </div>
    )
}

export default AffichProj