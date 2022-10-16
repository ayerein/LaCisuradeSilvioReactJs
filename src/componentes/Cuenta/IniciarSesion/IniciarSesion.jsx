import appFirebase from '../../../firebase/config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import PaginaDeUsuario from '../PaginaDeUsuario/PaginadeUsuario'


const auth = getAuth(appFirebase)


const IniciarSesion = ( {cambio} ) => {
    const [ emailInput, definirEmail ] = useState('')
    const [ contraseñaInput, definirContraseña ] = useState('')

    const [ usuario, estadoUsuario] = useState(false)

    onAuthStateChanged(auth, (usuarioFirebase) => {
        usuarioFirebase ? estadoUsuario(true) : estadoUsuario(false)
    })

    const ingresar = async(e) => {
        await signInWithEmailAndPassword(auth, emailInput, contraseñaInput)
    }

    return(
        <>
        { usuario ? <PaginaDeUsuario/> : 
            <>
                <p className="ingreso-titulo">Iniciar sesión</p>
                <input type="email" name="ingresar-email" placeholder="Email" required autoComplete="off" onChange={ (e)=> definirEmail(e.target.value)} />
                <input type="password" name="ingresar-contraseña" required placeholder="Contraseña" onChange={ (e)=> definirContraseña(e.target.value)} />
                <button className="ingreso-boton" onClick={ingresar}>Ingresar</button>
                <p className="ingreso-crear-cuenta" onClick={cambio}>Crear una cuenta</p>
            </>
        }
        </>
    )
}

export default IniciarSesion