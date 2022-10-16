import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import CarritoFormulario from "../CarritoFormulario/CarritoFormulario"
import CarritoProductos from "../CarritoProductos/CarritoProductos"

const CarritoDetalle = () => {
    const [ formulario, activarFormulario ] = useState(false)

    return(
        <>
        {
            formulario ?
            <CarritoFormulario />
            :
            <CarritoProductos activarFormulario={activarFormulario} />
        }
        </>
    )
}

export default CarritoDetalle