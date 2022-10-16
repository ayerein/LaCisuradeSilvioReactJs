import { UsarContexto } from "../../../contexto/Contexto"

const CarritoFormularioDetalles = () => {
    const { listaCarrito, precioTotal } = UsarContexto()
    
    return(
        <div className="compra-detalles">
            {listaCarrito.map(obj => (
                <div key={obj.id} className="compra-detalles-individual">

                    <div className="contenedor-detalles-img">
                        <img src={obj.url} className="carrito-detalles-img" alt="imagen producto" />
                    </div>

                    <div className="contenedor-detalles-individual" key={obj.id}>
                        <p>{obj.nombre} {obj.talle}</p>
                    </div>

                    <div className="contenedor-detalles-contador">
                        <p>Cantidad: {obj.contador} </p>
                    </div>

                </div>
            ))}
            <p>Total a pagar: ${precioTotal()}</p>
        </div>
    )

}

export default CarritoFormularioDetalles