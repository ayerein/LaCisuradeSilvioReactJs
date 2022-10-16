import { useState } from "react"
import { Link } from "react-router-dom"
import { UsarContexto } from "../../../contexto/Contexto"

const TiendaDetalleIndividual = ({ producto }) => {
    let [ contador, cambioContador ] = useState(1)
    let  [stockActual, cambioStock ] = useState(producto.stock)
    const [ botonAgregar, cambioBotonAgregar ] = useState(true)
    const { añadirAlCarrito } = UsarContexto()

    function sumar () {
        if (contador < stockActual) {cambioContador(contador +1)}
    }
    function restar () {
        if (contador > 1) {cambioContador(contador - 1)}
    }
    function agregar () {
        if (stockActual > 0){
            cambioStock(stockActual - contador)
            cambioBotonAgregar(false)
            añadirAlCarrito({...producto, contador})
        }
    }

    return(
        <>
        <img src={producto.url} alt="" className="producto-imagen" />

        <div className="detalles-descripcion">
            
        <Link to={'/tienda'}>
            <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver" className="boton-volver" />
        </Link>

            <p className="detalles-titulo">{producto.nombre}</p>
            <p className="p-detalles">Talle: {producto.talle}</p>
            <p className="p-detalles">Precio: ${producto.precio}</p>
            <p className="p-detalles">Stock: {producto.stock} Unidades.</p>

            <div className="contenedor-detalles-contador">
                <div className="contador">
                    <p className="sumarRestar" onClick={restar}>-</p>
                    <p>{contador}</p>
                    <p className="sumarRestar" onClick={sumar}>+</p>
                </div>
            </div>

            <div className="detalles-botones">
                { botonAgregar ? 
                <button className="boton-agregar" onClick={agregar}>Agregar al carrito</button>
                :
                <>
                    <p className="p-detalles-agregado">Agregaste {contador} {producto.nombre} a tu carrito!</p>
                    <Link to={'/tienda/carrito'}>
                        <button className="boton-ir-carrito">Ir a mi carrito</button>
                    </Link>
                </>
                }
            </div>
        </div>
        </>
    )
}

export default TiendaDetalleIndividual