import React, { useEffect, useState } from 'react';
import './Logo.css';
import Logotower1 from './Imagenes/tower1.png';
import Logotower2 from './Imagenes/tower2.png';
function Logo() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagenes = [
        Logotower1,
        Logotower2
    ];

    // Función para cambiar la imagen
    const nexImagenes = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    // Cambiar automáticamente cada 3 segundos
    useEffect(() => {
        const intervaId = setInterval(nexImagenes, 3000); // Cambia la imagen cada 3 segundos
        return () => clearInterval(intervaId); // Limpiar el intervalo al desmontar el componente
    }, []); // No es necesario incluir nexImagenes como dependencia

    return (
        <><div className='Container'>
            <div className="carrusel">
                <div className="carrusel-images">
                    <img src={imagenes[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
                </div>

            </div>
        </div></>
    );
}

export default Logo;