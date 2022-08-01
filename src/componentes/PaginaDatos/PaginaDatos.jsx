import { addDoc, collection, getFirestore } from "firebase/firestore"
import appFirebase from "../../firebase/config"

import { useState } from "react"


const db = getFirestore(appFirebase)

const PaginaDatos = ( {email} ) => {

    const valorDatos = {
        email,
        nombre : '',
        apellido : '',
        ciudad : '',
        direccion : '',
        piso : ''
    }

    const [ datos, cambioDatos ] = useState(valorDatos)

    const obtenerDatos = (e) => {
        const {name, value} = e.target
        cambioDatos({...datos, [name]:value})
    }

    const guardarDatos = async(e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db,'Usuarios'),{
                ...datos
            })
        } catch (error) {
            console.log(error)
        }
        cambioDatos({...valorDatos})
    }

    return(
        <form className="formulario-datos">
            <h3 className="titulo">Gracias por crear tu cuenta!</h3>
            <p className="p-datos">Para continuar ingresa tus datos para futuras compras</p>
            <input type="text" name='nombre' required autoComplete="off" placeholder="Nombre" onChange={obtenerDatos} value={datos.nombre}/>
            <input type="text"name='apellido' required autoComplete="off" placeholder="Apellido" onChange={obtenerDatos} value={datos.apellido}/>
            <input type="text" name='ciudad' required autoComplete="off" placeholder="Ciudad" onChange={obtenerDatos} value={datos.ciudad}/>
            <input type="text" name='direccion' required autoComplete="off" placeholder="Direccion" onChange={obtenerDatos} value={datos.direccion}/>
            <input type="text" name='piso' required autoComplete="off" placeholder="Piso/Departamento" onChange={obtenerDatos} value={datos.piso}/>
            <button className="boton-guardar-datos" onClick={guardarDatos}>Guardar</button>
        </form>
    )
}

export default PaginaDatos