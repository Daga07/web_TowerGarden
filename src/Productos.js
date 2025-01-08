import './Productos.css'
import LogoImagen from './Imagenes/towerucev.png';
function Productos() {
    return (
        <div className='ContainerProductos'>
            <img src={LogoImagen} className='ProductosImagen' />
            <h1 className='TituliProductos'> Los Tower Garden monitorean un sistema de crecimiento de cultivos aeropónicos de manera eficiente crucial para lograr un alto rendimiento y reducción de la necesidad de utilización de amplios espacios, evita el uso de plaguicidas al ser ambientes controlados. </h1>
            <h1 className='ProductosTitulo'>  Tower Garden 1: <p className='ProductosSutitulo'> El sistema está compuesto por una torre como soporte para el desarrollo de las plantas, las cuales son monitoreadas por sensores de temperatura, humedad, irradiado de iluminación LED manteniéndolo en su estado ideal en un ambiente controlado, cuenta con un sistema electrónico basado en microcontroladoes para control y adquisición de datos hacia una aplicación móvil, a través de la cual el usuario podrá visualizar el estado en tiempo real de su cultivo.
            <p>Se encuentra en tres presentaciones 1 metro y 2 metros.</p></p> </h1>
            <h1 className='ProductosTitulo'>  Tower Garden 2: <p className='ProductosSutitulo'> El sistema está compuesto por una torre como soporte para el desarrollo de las plantas, las cuales son monitoreadas por sensores de temperatura, humedad, irradiado de iluminación LED, cuenta con un sistema electrónico basado en microcontroladores para control y adquisición de datos hacia una aplicación móvil, a través de la cual el usuario podrá visualizar el estado en tiempo real de su cultivo.
            <p>Se encuentra en tres presentaciones 1 metro y 2 metros.</p></p> </h1>
            <h1 className='ProductosTitulo'>  Tower Garden 3: <p className='ProductosSutitulo'> El sistema está compuesto por una torre como soporte para el desarrollo de las plantas, cuenta con un sistema de riego impulsado por motor.
            <p>Se encuentra en tres presentaciones 1 metro y 2 metros.</p></p> </h1>
            
        </div>

    );
}
export default Productos