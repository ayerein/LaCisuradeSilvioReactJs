import { Link } from "react-router-dom"

const TiendaCategoriaElegida = ({ mostrarProductos }) =>{

    return(
        <div className="contenedor-productos">
            {
            mostrarProductos.map(obj => (
                <div key={obj.id} className="producto-individual" >
                    <img src={obj.url} className="producto-imagen" alt="Imagen del producto" />
                    <p className="producto-titulo">{obj.nombre} {obj.talle}</p>
                    <p className="producto-precio">${obj.precio}</p>
                    <Link to={`/tienda/detalle/${obj.id}`}>
                        <button className="producto-boton-comprar">Ver Detalle</button>
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default TiendaCategoriaElegida