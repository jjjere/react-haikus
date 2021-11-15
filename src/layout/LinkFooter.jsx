import "./LinkFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkFooter = ({ icono, texto }) => {
    return (
        <div className="contenedorlinkfooter">
            <FontAwesomeIcon icon ={icono}/>
            <div>
                {texto}
            </div>

        </div>
    );
};

export default LinkFooter;