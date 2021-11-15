
import React from 'react'
import "./Contactanos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Contactanos = () => {
    return (
        <>
            <div className="IconosContactanos" >
                <FontAwesomeIcon icon={faInstagram} className="iconos" />
                <FontAwesomeIcon icon={faEnvelope} className="iconos" />
                <FontAwesomeIcon icon={faFacebook} className="iconos" />

            </div>
            <p className = "Parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis labore tenetur nemo nulla qui officia minima fugiat culpa enim quo et esse eum placeat numquam praesentium, nesciunt, eius autem saepe</p>
        </>
    )

}

export default Contactanos
