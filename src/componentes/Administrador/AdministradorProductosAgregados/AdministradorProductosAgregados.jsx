import { useState } from "react"

const AdministradorProductosAgregados = ({ productoSeleccionado, eliminarProducto, deshabilitarStock, modificarStock, modificarPrecio }) => {
    const [ botonStock, cambioBotonStock ] = useState(false)
    const [ botonPrecio, cambioBotonPrecio ] = useState(false)
    const [ valor, cambioValor ] = useState(null)

    function confirmarStock() {
        modificarStock(valor, productoSeleccionado[0].id)
        cambioBotonStock(false)
    }
    function confirmarPrecio() {
        modificarPrecio(valor, productoSeleccionado[0].id)
        cambioBotonPrecio(false)
    }
    function cambiarBoton(boton) {
        if (boton === 'precio') {
            cambioBotonPrecio(true)
            cambioBotonStock(false)
        }
        if (boton === 'stock') {
            cambioBotonStock(true)
            cambioBotonPrecio(false)
        }
    }


    return(
        <div className="contenedor-administrar-stock">
            <div className="administrar-stock-descripcion">
                <img src={productoSeleccionado[0].url} alt="" />
                <div>
                    <p>Nombre: {productoSeleccionado[0].nombre}</p>
                    <p>Talle: {productoSeleccionado[0].talle}</p>
                    <p>Categoria: {productoSeleccionado[0].categoria}</p>
                    <p>Precio: ${productoSeleccionado[0].precio}</p>
                    <p>Stock: {productoSeleccionado[0].stock}</p>
                </div>
            </div>
            <div className="administrar-stock-botones">
                <button className="administrar-stock-btn" onClick={()=> eliminarProducto(productoSeleccionado[0].id)}>Eliminar producto</button>
                <button className="administrar-stock-btn" onClick={()=> deshabilitarStock(productoSeleccionado[0].id)}>Producto sin stock</button>  
                { botonStock ? <div className="administrar-nuevo-stock-precio">
                <p>¿Cual es el nuevo stock de este producto?</p>
                <input type="number" autoFocus onChange={(e)=> cambioValor(e.target.value)} />
                <div>
                    <button className="administrar-stock-btn-dos" onClick={()=> confirmarStock()}>Confirmar</button>
                    <button className="administrar-stock-btn-dos" onClick={()=> cambioBotonStock(false)}>Cancelar</button>
                </div>
                </div>
                :
                <button className="administrar-stock-btn" onClick={()=> cambiarBoton('stock')}>Modificar stock</button>  
                }
                { botonPrecio ? <div className="administrar-nuevo-stock-precio">
                <p>¿Cual es el nuevo precio de este producto?</p>
                <input type="number" autoFocus onChange={(e)=> cambioValor(e.target.value)} />
                <div>
                    <button className="administrar-stock-btn-dos" onClick={()=> confirmarPrecio()}>Confirmar</button>
                    <button className="administrar-stock-btn-dos" onClick={()=> cambioBotonPrecio(false)}>Cancelar</button>
                </div>
                </div>
                :
                <button className="administrar-stock-btn" onClick={()=> cambiarBoton('precio')}>Modificar precio</button>  
                }
            </div>
        </div>
    )
}

export default AdministradorProductosAgregados