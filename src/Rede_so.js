import React, { useState } from 'react';
import './Rede_so.css'; // Asegúrate de tener los estilos definidos en un archivo CSS separado
import Logofacebook from './Imagenes/facebook.png';
import Logoinstagram from './Imagenes/instagram.png';
import Logowhatsapp from './Imagenes/whatsapp.png';
function Rede_so() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            {/* Botón flotante */}
            <div className="flotante_button" onClick={toggleMenu}>
                🌐
            </div>

            {/* Menú desplegable */}
            <div className={`flotante_menu ${menuVisible ? 'visible' : ''}`}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={Logofacebook} alt="Facebook" className='iconI' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={Logoinstagram} alt="Instagram" className='iconI' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={Logowhatsapp} alt="WhatsApp" className='iconI' />
                </a>
            </div>
        </>
    );
}

export default Rede_so;