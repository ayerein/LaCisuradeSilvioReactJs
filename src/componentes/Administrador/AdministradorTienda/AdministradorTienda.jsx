import { useState } from "react"
import AdministradorPedidos from "../AdministradorPedidos/AdministradorPedidos"
import AdministradorStock from "../AdministradorStock/AdministradorStock"

const AdministradorTienda = ( {seleccionarOpcion} ) => {
    const [ opcion, cambioOpcion ] = useState('')
    return(
        <>
            {opcion === '' &&
            <>
            <div className="consulta-volver">
                <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver" onClick={()=>{seleccionarOpcion("")}} />
            </div>
            <div className="categoria" onClick={()=>cambioOpcion('Modificar Stock')}>Modificar Stock</div>
            <div className="categoria" onClick={()=>cambioOpcion('Ver pedidos')} >Ver Pedidos</div>
            </>
            }
            {opcion === 'Modificar Stock' && <AdministradorStock cambioOpcion={cambioOpcion} />}
            {opcion === 'Ver pedidos' && <AdministradorPedidos cambioOpcion={cambioOpcion} />}
        </>
    )
}

export default AdministradorTienda