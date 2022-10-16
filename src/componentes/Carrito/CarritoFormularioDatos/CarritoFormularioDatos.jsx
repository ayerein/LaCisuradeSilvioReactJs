import ContenedorIngreso from "../../../contenedores/ContenedorIngreso/ContenedorIngreso"

const CarritoFormularioDatos = ({ datos, obtenerDatos, generarOrden }) => {
    return(
        <>
        {/* <ContenedorIngreso /> */}
        <div className="formulario-datos">
            <p className="p-datos">Para confirmar tu compra debes completar los siguientes datos:</p>
            <input type="text" name='nombre' required autoComplete="off" placeholder="Nombre" onChange={obtenerDatos} value={datos.nombre}/>
            <input type="text" name='apellido' required autoComplete="off" placeholder="Apellido" onChange={obtenerDatos} value={datos.apellido}/>
            <input type="email" name="email" required autoComplete="off" placeholder="Email" onChange={obtenerDatos} value={datos.email} />
            <input type="text" name='ciudad' required autoComplete="off" placeholder="Ciudad" onChange={obtenerDatos} value={datos.ciudad}/>
            <input type="text" name='direccion' required autoComplete="off" placeholder="Direccion" onChange={obtenerDatos} value={datos.direccion}/>
            <input type="text" name='piso' required autoComplete="off" placeholder="Piso/Departamento" onChange={obtenerDatos} value={datos.piso}/>
            <button className="boton-guardar-datos" onClick={()=> generarOrden()}>Confirmar Pedido</button>
        </div> 
        </>
    )

}

export default CarritoFormularioDatos
