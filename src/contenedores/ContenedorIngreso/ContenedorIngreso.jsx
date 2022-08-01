import { useState } from "react"
import CrearCuenta from "../../componentes/CrearCuenta/CrearCuenta"
import IniciarSesion from "../../componentes/IniciarSesion/IniciarSesion"

const ContenedorIngreso = () => {
    const [ boton, cambiarBoton ] = useState(true)
    
    function cambio (){
        cambiarBoton(!boton)
    }

    return(
        <main>
            <div className="ingreso-fondo">
                <div className="ingreso-contenedor">
                    {boton ? <IniciarSesion cambio={cambio}/> : <CrearCuenta cambio={cambio}/>}
                </div>
                
            </div>
        </main>
    )
}

export default ContenedorIngreso