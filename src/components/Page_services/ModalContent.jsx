import React, { useEffect, useState } from 'react'
import defineCliConfig from "../../../squarecomcommercial/sanity.cli";

const ModalContent = ({ closeModal, data }) => {

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeModal()
        }
    }

    return (
        <div className="modal-proj overlay" onClick={closeModal} onKeyDown={handleKeyDown} role="button" tabIndex="0">
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
                                <p className='content_desc'>{data.nomproj}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default ModalContent