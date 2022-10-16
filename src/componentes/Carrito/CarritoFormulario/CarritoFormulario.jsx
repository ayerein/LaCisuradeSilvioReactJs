import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import appFirebase from '../../../firebase/config'

import { UsarContexto } from "../../../contexto/Contexto"
import CarritoFormularioDetalles from "../CarritoFormularioDetalles/CarritoFormularioDetalles"
import CarritoFormularioDatos from "../CarritoFormularioDatos/CarritoFormularioDatos"
import CarritoCompraFinalizada from "../CarritoCompraFinalizada/CarritoCompraFinalizada"

const db = getFirestore(appFirebase)

const valorDatos = {
    email: '',
    nombre : '',
    apellido : '',
    ciudad : '',
    direccion : '',
    piso : ''
}

let idCompra = ''

const CarritoFormulario = () => {
    const [ final, activarFinal ] = useState(false)
    const [ datos, cambioDatos ] = useState(valorDatos)
    const { listaCarrito, precioTotal, vaciarCarrito } = UsarContexto()
    
    const obtenerDatos = (e) => {
        const {name, value} = e.target
        cambioDatos({...datos, [name]:value})
    }

    function generarOrden() {
        idCompra = Date.now()
        let orden = {}

        orden.total = precioTotal()
        orden.fecha = new Date().toLocaleDateString()
        orden.cliente = {datos}
        orden.idCompra = idCompra
        orden.objetos = listaCarrito.map(obj => {
            const idObj = obj.id
            const nombre =  `${obj.nombre} ${obj.talle}` 
            const img = obj.url
            const precio = obj.precio * obj.contador
            const cantidad = obj.contador

            return {idObj, img, precio, nombre, cantidad}
        })
        const consultaDatos = collection(db, 'Ordenes')
        addDoc(consultaDatos, orden)
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
        .finally(() => activarFinal(true))
    }

    return(
        <>
            { final ? 
            <CarritoCompraFinalizada idCompra={idCompra} />
            :
            <div className="contenedor-confirmar-compra">
                <CarritoFormularioDetalles />
                <CarritoFormularioDatos 
                datos={datos} 
                obtenerDatos={obtenerDatos} 
                generarOrden={generarOrden}
                />
            </div>
            }
        </>
    )
}

export default CarritoFormulario