import { UsarContexto } from "../../contexto/Contexto"
import { Link } from 'react-router-dom';

import CarritoDetalle from "../../componentes/Carrito/CarritoDetalles/CarritoDetalles";

const ContenedorCarrito = () => {
    const { listaCarrito } = UsarContexto()

    return (
        <div className="imagen-fondo-carrito">
            <div className="contenedor-carrito">

                <Link to="/tienda">
                    <div className="consulta-volver">
                        <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver"/>
                    </div>
                </Link>


                {listaCarrito.length === 0 ? 
                <>
                    <h2 className="carrito-titulo">Tu carrito</h2>
                    <div className="contenedor-carrito-vacio">
                        <p className="carrito-vacio-titulo">Tu carrito esta vacio</p> 
                        <Link to="/tienda">
                            <button className="carrito-vacio-boton">Ir a comprar</button>
                        </Link>
                    </div>
                </>
                :
                    <CarritoDetalle />
                }
            </div>
        </div>
    )
}

export default ContenedorCarrito