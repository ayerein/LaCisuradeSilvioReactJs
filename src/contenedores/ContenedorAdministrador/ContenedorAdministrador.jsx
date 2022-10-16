import AdministradorCategorias from "../../componentes/Administrador/AdministradorCategorias/AdministradorCategorias"


const ContenedorAdministrador = () => {
    return(
        <main>
            <div className="contenedor-admin-fondo">
                <div className="contenedor-admin-fondo-negro">
                    <AdministradorCategorias />
                </div>
            </div>
        </main>
    )
}

export default ContenedorAdministrador