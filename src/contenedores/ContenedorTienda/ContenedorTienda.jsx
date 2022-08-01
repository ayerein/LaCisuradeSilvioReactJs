import CategoriasTienda from "../../componentes/CategoriasTienda/CategoriasTienda"


const ContenedorTienda = () => {
    return(
        <main>
            <div className="imagen-fondo-tienda">
                <div className="contenedor-productos">
                    <CategoriasTienda />
                </div>
            </div>
        </main>
    )
}

export default ContenedorTienda