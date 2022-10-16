import { UsarContexto } from "../../../contexto/Contexto"

const CarritoProductos = ({ activarFormulario }) => {
    const { listaCarrito, vaciarCarrito, restarCantidad, sumarCantidad, removerItem, precioTotal } = UsarContexto()

    return(
        <>
        <h2 className="carrito-titulo">Tu carrito</h2>
        
        <div className="contenedor-carrito-detalles">
            {listaCarrito.map(obj => (
                <div key={obj.id} className="carrito-detalles">

                    <div className="contenedor-detalles-img">
                        <img src={obj.url} className="carrito-detalles-img" alt="imagen producto" />
                    </div>

                    <div className="contenedor-detalles-individual" key={obj.id}>
                        <p>{obj.nombre} {obj.talle}</p>
                    </div>

                    <div className="contenedor-detalles-precio">
                        <p>${obj.precio}</p>
                    </div>

                    <div className="contenedor-detalles-contador">
                        <p>Cantidad: </p>
                        <button className='boton-cantidad' onClick={()=> restarCantidad(obj)}>-</button>
                            <p>{obj.contador}</p>
                        <button className='boton-cantidad' onClick={()=> sumarCantidad(obj)}>+</button>
                    </div>

                    <div className="contenedor-detalles-remover">
                        <button className="boton-remover-item" onClick={()=> removerItem(obj.id)}>x</button>
                    </div>

                </div>
            ))}

            <p className="precio-total">Precio total: ${precioTotal()}</p>
            
            <button className="boton-vaciar-carrito" onClick={()=> activarFormulario(true)}>Continuar Compra</button>
            <button className="boton-vaciar-carrito" onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        </div>
        </>
    )
}

export default CarritoProductos