import appFirebase from "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirebase)

const PaginaDeUsuario = ( {email} ) => {
    return(
    <div className="contenedor-usuario">
        <h3 className="titulo-usuario">Iniciaste sesion</h3>
        <button className="boton-cerrar-sesion" onClick={()=>signOut(auth)}>Cerrar Sesion</button>        
    </div>
    )
} 

export default PaginaDeUsuario