import { useState } from "react"
import { Link } from 'react-router-dom';
import ContenedorCarrito from "../../../contenedores/ContenedorCarrito/ContenedorCarrito";

import { useTraerProducto } from "../../../hooks/useTraerProductos";
import TiendaCategoriaElegida from "../TiendaCategoriaElegida/TiendaCategoriaElegida";

const TiendaCategorias = () => {
    
    const [ categoria, seleccionarCategoria ] = useState('')
    const { lista } = useTraerProducto()

    let mostrarProductos = lista.filter(obj => obj.categoria === categoria)
    
    const elegirCategoria = (cat) =>{
        if (categoria === '') {
            seleccionarCategoria(cat)
            document.getElementById('categorias').classList.replace('contenedor-categorias', 'contenedor-categorias-dos');
            document.getElementById(`opcion-${cat}`).classList.add('opcion-seleccionada');
        } else {
            document.getElementById(`opcion-${categoria}`).classList.remove('opcion-seleccionada');
            seleccionarCategoria(cat)
            document.getElementById('categorias').classList.replace('contenedor-categorias', 'contenedor-categorias-dos');
            document.getElementById(`opcion-${cat}`).classList.add('opcion-seleccionada');
        }
        
    }

    return(
        <>
            <div className="contenedor-categorias"  id="categorias">
                <div className="opcion-categoria" id="opcion-ropa" onClick={()=>{elegirCategoria('ropa')}} >
                    <img src="../assets/img/tienda-ropa.png" alt="Opcion ropa" />
                    <p>Ropa</p>
                </div>

                <div className="opcion-categoria" id="opcion-accesorios" onClick={()=>{elegirCategoria('accesorios')}} >
                    <img src="../assets/img/tienda-accesorios.png" alt="Opcion accesorios" />
                    <p>Accesorios</p>
                </div>

                <div className="opcion-categoria" id="opcion-cds" onClick={()=>{elegirCategoria('cds')}} >
                    <img src="../assets/img/tienda-cd.png" alt="Opcion cds" />
                    <p>Cds</p>
                </div>

                <Link to="/tienda/carrito">
                    <div className="opcion-categoria" id="opcion-carrito">
                        <img src="../assets/img/tienda-carrito.png" alt="Opcion carrito" />
                        <p>Abrir Carrito</p>
                    </div>
                </Link>
            </div>
        
            <TiendaCategoriaElegida mostrarProductos={mostrarProductos} />

            {categoria === 'carrito' && <ContenedorCarrito/>}
        </>
    )
}

export default TiendaCategorias