import { Link } from "react-router-dom"

const CartelFinalContacto = () => {
    return(
        <div className="contenedor-formulario">
            <div className="fondo-cartel">
                <h3>Muchas gracias por enviar tu consulta, nos pondremos en contacto en el menor tiempo posible!</h3>
                <Link to='/'>
                    <p className="boton">Volver al inicio</p>
                </Link>
            </div>
        </div>
    )
}

export default CartelFinalContacto