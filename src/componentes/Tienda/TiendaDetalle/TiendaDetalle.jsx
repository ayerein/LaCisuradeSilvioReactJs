import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TiendaDetalleIndividual from "../TiendaDetalleIndividual/TiendaDetalleIndividual";

const TiendaDetalle = () => {
    const [producto, cambioProducto] = useState({})
    const [carga, cambioCarga] = useState(false)

    const { id } = useParams()
    
    useEffect(() => {
        const datos = getFirestore()
        const consultaDatos = doc(datos, 'Stock', id)
        getDoc(consultaDatos)
        .then(resp => cambioProducto( { id: resp.id, ...resp.data()}))
        .catch((err) => console.log(err))
        .finally(()=> cambioCarga(true))
    }, [id])

    return(
        <div className="imagen-fondo-detalles">
            <div className="contenedor-fondo-detalles">
                { carga ? 
                <div className="contenedor-detalles">
                    <TiendaDetalleIndividual producto={producto} />
                </div>
                :
                <h2>Cargando...</h2>
                }
            </div>
        </div>  
    )
}

export default TiendaDetalle