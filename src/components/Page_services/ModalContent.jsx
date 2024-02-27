import React, { useEffect, useState } from 'react'
import defineCliConfig from "../../../squarecomcommercial/sanity.cli";

const ModalContent = ({ closeModal }) => {

    const [dataModal, setDataModal] = useState([])

    useEffect(() => {
        defineCliConfig.fetch(
            `*[_type == 'services' && nomcat == 'Print']{
                nomcat,
                descriptionservice,
                phraseaccroche,
                pictoservice {
                    asset->{url}
                    }
                }`
        ).then((datamodal) => { setDataModal(datamodal); console.log(datamodal) })
            .catch(error => console.error("Erreur lors de la récupération des données", error))
    }, [])

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeModal()
            console.log('test')
        }
    }

    return (
        <div className="modal-proj overlay" onClick={closeModal} onKeyDown={handleKeyDown} role="button">
            <input type="text" />
                <div className='bandeau-top'>
                    <h1 className='h1-modale'>INFORMATIONS COMPL&#201;MENTAIRES</h1>
                    <button className="close-modal">X</button>
                </div>
                <div className="modale-content">
                    <div className="thumbnail-proj-modal">
                        <img src='../medias/cardf.jpg' alt='cardf' />
                    </div>
                    <div className="descriptif-proj">
                        <ul>
                            <li className='nom-client'>
                                <h2 className='titre_desc'>Nom du client :</h2>
                                <p className='content_desc'>Car'DF</p>
                            </li>
                            <li className='support-util'>
                                <h2 className='titre_desc'>Support utilisé :</h2>
                                <p className='content_desc'>Wordpress</p>
                            </li>
                            <li className='format-proj'>
                                <h2 className='titre_desc'>Format :</h2>
                                <p className='content_desc'>Site internet</p>
                            </li>
                            <li className='method-proj'>
                                <h2 className='titre_desc'>Méthode d'impression :</h2>
                                <p className='content_desc'>Ctrl + P</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default ModalContent