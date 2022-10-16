import { useState } from "react";
import { Link } from 'react-router-dom';

const TiendaContador = ({ stockActual, contador, restar, sumar, agregar, nombre, volver }) => {

    const [btnAgregar, cambioBtnAgregar] = useState(true)

    function botonAgregar(){
        cambioBtnAgregar(false)
        agregar()
    }

    return(
        <div className="contenedor-contador-objeto">

            {btnAgregar ? 
            <>
                <p className="detalles-stock">Stock: {stockActual}</p>
                <div className="contenedor-detalles-contador">
                    <button className="boton-cantidad" onClick={()=>restar()}>-</button>
                        <p className="detalles-contador">{contador}</p>
                    <button className="boton-cantidad" onClick={()=>sumar()}>+</button>
                </div>
                <button className="boton-agregar" onClick={()=> botonAgregar()}>Agregar al carrito</button>
            </>
            :
                <>
                    <p>Agregaste {contador} {nombre} al carrito.</p>
                    <button className="boton-volver" onClick={()=> volver()}>Continuar comprando</button>
                    <Link to="/tienda/carrito">
                    <button className="boton-ir-carrito">Ir al carrito</button>
                    </Link>
                </>
            }
            
        </div>
    )
}

export default TiendaContador