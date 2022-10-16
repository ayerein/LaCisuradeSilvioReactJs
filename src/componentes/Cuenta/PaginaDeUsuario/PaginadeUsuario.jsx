import appFirebase from "../../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
import { collection, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
const auth = getAuth(appFirebase)

const db = getFirestore(appFirebase)

const PaginaDeUsuario = ({ email }) => {
    const [ datos, cambioDatos ] = useState()

    /* useEffect(() => {
        const obtenerLista = async()=>{
        const consultaDatos = doc(db, 'Usuarios')
        getDoc(consultaDatos)
        .then(resp => cambioDatos( resp.data()))
        .catch((err) => console.log(err))
        .finally(()=> console.log(datos))
        }
        obtenerLista()
    }, []) */
    console.log(email)
    useEffect(()=> {
        const obtenerLista = async()=>{
            try {
                const consultaDatos = collection(db, 'Usuarios', {email})
                getDoc(consultaDatos)
                .then(resp => cambioDatos( resp.data()))
                .catch((err) => console.log(err))
                .finally(()=> console.log(datos))
            } catch (error) {
                console.log(error)
            }
        }
        obtenerLista()
    },[])

    return(
    <div className="contenedor-usuario">
        {/* <h3 className="titulo-usuario">Iniciaste sesión</h3> */}
        <div>
            <p className="p-datos-titulo">Tus Datos:</p>
            <p className="p-datos">Nombre: {datos.nombre} {datos.apellido}</p>
            <p className="p-datos">Email: {datos.email}</p>
            <p className="p-datos">Ciudad: {datos.ciudad}</p>
            <p className="p-datos">Direccion: {datos.direccion} {datos.piso}</p>
        </div> 
        <button className="boton-cerrar-sesion" onClick={()=>signOut(auth)}>Confirmar Compra</button>        
        <button className="boton-cerrar-sesion" onClick={()=>signOut(auth)}>Cerrar Sesion</button>        
    </div>
    )
} 

export default PaginaDeUsuario