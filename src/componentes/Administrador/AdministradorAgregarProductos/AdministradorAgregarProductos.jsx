
const AdministradorAgregarProductos = ({ capturarValores, valor, guardarDatos }) => {
    return(
        <form className="contenedor-form">
                <h2 className="titulo-agregar-productos">Agregar un nuevo producto</h2>
                <input type="text" className="input-base" name="nombre" placeholder="Nombre del Producto" autoComplete="off" required onChange={capturarValores} value={valor.nombre} />
                <select name="talle" className="input-base" autoComplete="off" required onChange={capturarValores} value={valor.talle} >
                    <option value="">Selecciona un talle</option>
                    <option value="-">-</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <input type="url" className="input-base" name="url" placeholder="Introduce la url de tu imagen" autoComplete="off" required onChange={capturarValores} value={valor.url} />
                <select className="input-base" name="categoria" required onChange={capturarValores} value={valor.categoria}>
                    <option value="">Selecciona una categoria</option>
                    <option value="ropa">Ropa</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="cds">Cds</option>
                </select>
                <input type="number" className="input-base" name="stock" placeholder="Unidades a agregar" autoComplete="off" required onChange={capturarValores} value={valor.stock}  />
                <input type="number" className="input-base" name="precio" placeholder="Precio" autoComplete="off" required onChange={capturarValores} value={valor.precio} />
                <button className="boton-actualizar-stock" onClick={guardarDatos}>Agregar Producto</button>
            </form>
    )
}

export default AdministradorAgregarProductos