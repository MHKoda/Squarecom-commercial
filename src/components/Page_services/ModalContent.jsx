import React from 'react'
import defineCliConfig from ''

export default function ModalContent({closeModal}) {

    defineCliConfig.fetch(
        `*[_type == 'projet' && depliantservices == 'print'][0..2]{
            client {
                nomclient
            },
            imageproj{
                asset->{url}
              },
            colorimetrie,
            impression,
            finitions,
        }`
    )

  return (
    <div className="modal-proj overlay" onClick={closeModal}>
        <div className='bandeau-top'>
            <h1 className='h1-modale'>INFORMATIONS COMPL&#201;MENTAIRES</h1>
            <button className="close-modal">X</button>
        </div>
        <ul className="modale-content">
            <li className="thumbnail-proj-modal">
                <img src='../medias/cardf.jpg' alt='cardf' />
            </li>
            <li className="descriptif-proj">
                <ul>
                    <li className='nom-client'>
                        <h2 className='titre_desc'>Nom du client: </h2>
                        <p className='content_desc'>Car'DF</p>
                    </li>
                    <li className='support-util'>
                        <h2 className='titre_desc'>Support utilisé:</h2>
                        <p className='content_desc'>Wordpress</p>
                    </li>
                    <li className='format-proj'>
                        <h2 className='titre_desc'>Format :</h2>
                        <p className='content_desc'>Site internet</p>
                    </li>
                    <li className='method-proj'>
                        <h2 className='titre_desc'>Méthode d'impression</h2>
                        <p className='content_desc'>Ctrl + P</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
