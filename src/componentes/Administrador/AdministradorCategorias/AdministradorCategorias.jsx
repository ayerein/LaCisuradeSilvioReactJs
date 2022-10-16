import { useState } from "react"
import AdministradorConsultas from "../AdministradorConsultas/AdministradorConsultas"
import AdministradorTienda from "../AdministradorTienda/AdministradorTienda"



const AdministradorCategorias = () => {
    const [ opcion, seleccionarOpcion ] = useState('')

    return(
        <div className="contenedor-principal">
            {opcion === '' && 
                <>
                <div className="categoria" onClick={()=>{seleccionarOpcion('consultas')}} >Ver consultas</div>
                <div className="categoria" onClick={()=>{seleccionarOpcion('tienda')}} >Administrar tienda</div>
                </>
            }
            {opcion === 'consultas' && <AdministradorConsultas seleccionarOpcion={seleccionarOpcion} />}
            {opcion === 'tienda' && <AdministradorTienda seleccionarOpcion={seleccionarOpcion} />}
            
            
        </div>
    )
}

export default AdministradorCategorias