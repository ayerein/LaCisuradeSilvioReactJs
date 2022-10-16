
const AdministradorMostrarPedido = ({ obj }) => {
    return(
        <>
            <div className="pedido-encabezado">
                <p className="encabezado-fecha">{obj.fecha}</p>
                <p>{obj.cliente.datos.nombre} {obj.cliente.datos.apellido}</p>
                <p>{obj.cliente.datos.email}</p>
            </div>
            <div className="pedido-envio">
                <p>Datos de envio:</p>
                <p>Ciudad: {obj.cliente.datos.ciudad}</p>
                <p>Direccion: {obj.cliente.datos.direccion} {obj.cliente.datos.piso}</p>
            </div>
            <div className="pedido-objetos">
                {obj.objetos.map((obje) => {
                    return(
                        <div className="pedido-objetos-individuales" key={obje.idObj}>
                            <img src={obje.img} alt="imagen-producto" />
                            <p>{obje.nombre}</p>
                            <p>Cantidad: {obje.cantidad}</p>
                        </div>
                    )
                   
                })}
            </div>
        </>
    )
}

export default AdministradorMostrarPedido