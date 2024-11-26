import React from "react";
import './Logo.css';
import LogoImagen from './Imagenes/towerucev.png';

function Logo() {
return (
    <div className="Container">
    <img src={LogoImagen}  className="LogoImage" />
    </div>
);
}

export default Logo;