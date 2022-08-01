import { useState } from "react"

import appFirebase from '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import PaginaDatos from "../PaginaDatos/PaginaDatos"

const auth = getAuth(appFirebase)


const CrearCuenta = ( {cambio} ) => {
    const [ emailInput, definirEmail ] = useState('')
    const [ contraseñaInput, definirContraseña ] = useState('')
    const [ contraseñaRepetidaInput, definirContraseñaRepetida] = useState('') 

    const [ errorContraseña, activarErrorContraseña ] = useState('')

    const [ ingresarDatos, activarIngresarDatos ] = useState(false)
    


    function comprobarContraseñas () {
        contraseñaRepetidaInput === contraseñaInput ? crearUsuario() : activarErrorContraseña('Las contraseñas deben coincidir')
    }

    const crearUsuario = async(e) => {
        await createUserWithEmailAndPassword(auth, emailInput, contraseñaInput)
        await signInWithEmailAndPassword(auth, emailInput, contraseñaInput)
        activarIngresarDatos(true)
    }

    return(
        <>
            {ingresarDatos ? <PaginaDatos email={emailInput}/> :
                <>
                    <p className="ingreso-titulo">Creá tu cuenta</p>
                    <input type="email" name="ingresar-email" required placeholder="Email" autoComplete="off" onChange={ (e)=> definirEmail(e.target.value)} />
                    <input type="password" name="ingresar-contraseña" required placeholder="Contraseña" onChange={ (e)=> definirContraseña(e.target.value)} />
                    <input type="password" name="ingresar-contraseña-dos" required placeholder="Repite tu contraseña" onChange={ (e)=> definirContraseñaRepetida(e.target.value)} />
                    <p className="error-contraseña">{errorContraseña}</p>
                    <button className="ingreso-boton" onClick = {comprobarContraseñas} >Crear Cuenta</button>
                    <p className="ingreso-crear-cuenta" onClick = {cambio} >Ingresar con otra cuenta</p>
                </>
            }
        </>
        
    )
}

export default CrearCuenta