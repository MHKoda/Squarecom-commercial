import React from 'react'

const ModalContent = ({ closeModal, data }) => {

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeModal()
        }
    }

    return (
        <div className="modal-proj overlay" onClick={closeModal} onKeyDown={handleKeyDown} role="button" tabIndex="0">
                <div className='bandeau-top'>
                    <h1 className='h1-modale'>INFORMATIONS COMPL&#201;MENTAIRES</h1>
                    <button className="close-modal">X</button>
                </div>
                <div className="modale-content">
                    <div className="thumbnail-proj-modal">
                        <img src={data.imageproj.asset.url} alt={data.altimage} />
                    </div>
                    <div className="descriptif-proj">
                        <ul>
                            <li>
                                <h2 className='titre_desc'>Client :</h2>
                                <p className='content_desc'>{data.client.nomclient}</p>
                            </li>
                            <li>
                                <h2 className='titre_desc'>Projet :</h2>
                                <p className='content_desc'>{data.nomproj}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default ModalContent