import React, { useEffect, useState } from "react"
import ModalContent from "./ModalContent"
import { createPortal } from "react-dom"
import defineCliConfig from "../../../squarecomcommercial/sanity.cli"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const AffichProj = ({ service }) => {

    const [showModal, setShowModal] = useState(false)

    const [dataProjets, setDataProjets] = useState([])
    
    const [selectedProjet, setSelectedProjet] = useState(null);
    const handleOpenModal = (projet) => {
        setSelectedProjet(projet)
    };

    if (showModal) {
        document.body.classList.add('active-modale')
    } else {
        document.body.classList.remove('active-modale')
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }

    useEffect(() => {
        let query = `*[_type == 'projet'`;

        if (service) {
            query += ` && service->nomservice == "${service}"`
        }

        query += `] | order(nomproj asc)  {
                nomproj,
                client->{nomclient},
                rubrique->{nomrubrique},
                imageproj {
                  asset->{url}
                },
                altimage,
                slugproj{current}
            }`

        defineCliConfig.fetch(query)
            .then((data) => {
                setDataProjets(data)
            })
    }, [])

    return (
        <div className="container containerArticle">
            <Slider className="conteneru-slider" {...settings}>
                {dataProjets.map((projet, index) => (
                    <div key={`list-${index}`} className="element-liste">
                        <img src={projet.imageproj.asset.url} alt={projet.altimage} />
                        <button onClick={() => { handleOpenModal(projet); setShowModal(true) }} className="afficher-projet">
                            <span>{projet.nomproj}</span>
                        </button>
                        {showModal && createPortal(<ModalContent data={selectedProjet} closeModal={() => setShowModal(false)} />, document.body)}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default AffichProj