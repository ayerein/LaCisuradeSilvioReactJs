import AdministradorConsultas from "../../componentes/AdministradorConsultas/AdministradorConsultas"


const ContenedorAdministrador = () => {
    return(
        <main>
            <div className="contenedor-administrador">
                <div className="contenedor-principal">
                    <AdministradorConsultas />
                </div>
            </div>
        </main>
    )
}

export default ContenedorAdministrador