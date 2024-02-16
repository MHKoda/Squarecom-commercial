import React from "react";

const Presentation = ({service_desc, service_titre, service_picto}) => {
    return (
        <div className="description container">
            <div className="col-left">
                <h1 className="service_titre">{service_titre}</h1>
                <p className="service_desc">{service_desc}</p>
            </div>
            <div className="absolute-texture">
                <img src="/src/medias/texture_titre2.jpg" alt="texture noir hachures" />
            </div>
            <div className="col-right">
                <img className="service_image" src={service_picto} alt="illustration pictographique" />
            </div>
        </div>
    )
}

export default Presentation