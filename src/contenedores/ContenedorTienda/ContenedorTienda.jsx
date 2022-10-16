import TiendaCategorias from "../../componentes/Tienda/TiendaCategorias/TiendaCategorias"



const ContenedorTienda = () => {

    return(
        <main>
            <div className="imagen-fondo-tienda">
                <div className="contenedor-tienda">
                    <TiendaCategorias />
                </div>
            </div>
        </main>
    )
}

export default ContenedorTienda