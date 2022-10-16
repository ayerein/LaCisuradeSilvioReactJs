
const AdministradorListaProductosAgregados = ({ cambioAgregarMostrar, lista, cambioIdSeleccionado}) => {
    function mostrarProductoElegido(id) {
        cambioAgregarMostrar(false)
        cambioIdSeleccionado(id)
    }

    return(
        <div className="contenedor-seleccionar">
                <div className="contenedor-consulta-individual">
                    <div className="consulta-individual" onClick={()=> cambioAgregarMostrar(true)}>
                        <p>Agregar un nuevo producto</p>
                    </div>
                </div>
                {
                    lista.map(obj => (
                        <div key={obj.id} className="contenedor-consulta-individual">
                            <div key={obj.id} className="consulta-individual" onClick={()=> mostrarProductoElegido(obj.id)} >
                                <p>{obj.nombre} {obj.talle}</p>
                                <p>{obj.categoria}</p>
                                <p>stock disponible: {obj.stock}</p>
                                <p>${obj.precio}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default AdministradorListaProductosAgregados