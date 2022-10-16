import { useState } from "react"
import CrearCuenta from "../../componentes/Cuenta/CrearCuenta/CrearCuenta"
import IniciarSesion from "../../componentes/Cuenta/IniciarSesion/IniciarSesion"

const ContenedorIngreso = () => {
    const [ boton, cambiarBoton ] = useState(true)
    
    function cambio (){
        cambiarBoton(!boton)
    }

    return(
        <div className="ingreso-contenedor">
            {boton ? <IniciarSesion cambio={cambio}/> : <CrearCuenta cambio={cambio}/>}
        </div>
    )
}

export default ContenedorIngreso