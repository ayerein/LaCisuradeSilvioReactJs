
const CarritoCompraFinalizada = ({ idCompra }) => {
return(
    <div className="carrito-cartel-final">
        <p className="titulo-cartel">Gracias por tu realizar tu pedido!</p>
        <p className="p-cartel">Id de tu compra: {idCompra}</p>
        <p className="p-cartel">Guarda el id de compra para poder revisar el estado de tu pedido.</p>
    </div>
)
}

export default CarritoCompraFinalizada