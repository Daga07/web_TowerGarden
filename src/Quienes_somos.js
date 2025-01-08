import './Quienes_somos.css'
import LogoImagen from './Imagenes/towerucev.png';

function Quienes_somos() {
    return (
        <div className='ConQuienes'>
            <h1 className='QuienesTitulo'> ¿Quienes somos?</h1>
            <h1 className='QuienesSutitulo'> T-CU Tecnología para Cultivos  Urbanos</h1>
            <img src={LogoImagen} className='QuienesImagen' />
            <h1 className='QuienesTiViMi'>  Misión: <p className='QuienesSuViMi'> Somos una empresa que produce cultivos urbanos verticales automatizados para hogar y organizaciones, incrementando el confort visual en los entornos, proporcionando la opción de alimentos limpios al alcance de nuestros usuarios, de forma automatizada.</p> </h1>
            <h1 className='QuienesTiViMi'>  Visión: <p className='QuienesSuViMi'> Para el 2030 T-CU fortalecerá su portafolio de productos Cultivos urbanos verticales, llegando a mercados internacionales, velando por la calidad de vida de sus usuarios y empleados.</p> </h1>
        </div>
    );
}
export default Quienes_somos