import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import CartelFinalContacto from "../CartelFinalContacto/CartelFinalContacto";


const Contacto = () => {
    
    const [nombreInput, cambioNombreInput] = useState()
    const [telefonoInput, cambioTelefonoInput] = useState()
    const [emailInput, cambioEmailInput] = useState()
    const [emailRep, cambioEmailRep] = useState()
    const [asunto, cambioAsunto] = useState()
    const [mensaje, cambioMensaje] = useState()

    const [cartelFinal, aparecerCartelFinal] = useState( false )

    function enviarConsulta () {
        let consulta = {}

        consulta.datos = { nombre: nombreInput, telefono: telefonoInput, emailInput: emailInput }
        consulta.mensaje = { asunto: asunto, mensaje: mensaje}

        const datos = getFirestore()
        const consultaDatos = collection(datos, 'Consultas')
        addDoc(consultaDatos, consulta)
        .then(resp => console.log('consulta enviada'))
        .catch(err => console.log(err))
        .finally(() =>  aparecerCartelFinal(true))
    }

    const [ errorEmail, cambioErrorEmail ] = useState('')

    function comprobarEmail () {
        {emailRep === emailInput ? (enviarConsulta()) : (cambioErrorEmail('Los email deben coincidir')) } 
    }


    const [popup, aparecerPopup] = useState(false)

    function MostrarPopup () {
        aparecerPopup(true)
    }
    setTimeout(MostrarPopup, 4000);

    return(
        <main>
            <div className="contenedor-formulario-fondo">
                {cartelFinal ? <CartelFinalContacto /> :

                <div className="contenedor-formulario">
                    <div className="fondo-formulario">
                        <form onSubmit={e => {e.preventDefault()}}>
                            <h2>Contactanos</h2>
                            
                            <input type="text" autoComplete="off" name="nombre" id="nombre" placeholder="Nombre" className="input" required onChange={(e) => {cambioNombreInput(e.target.value)}} />

                            <input type="number" name="telefono" id="telefono" placeholder="Número de teléfono" className="input" required  onChange={(e) => {cambioTelefonoInput(e.target.value)}} />

                            <input type="email" autoComplete="off" name="email" id="email" placeholder="Email" className="input" required onChange={(e) => {cambioEmailInput(e.target.value)}} />

                            <input type="email" autoComplete="off" name="emailRep" placeholder='Vuelve a introducir tu email' className="input" onChange={(e) => {cambioEmailRep(e.target.value)} } />
                            <p className="input-error-email">{errorEmail}</p>

                            <input type="text" autoComplete="off" name="asunto" id="aunto" placeholder="Asunto" className="input" required onChange={(e) => {cambioAsunto(e.target.value)}} />
                            <textarea name="mensaje" required cols="30" rows="10" placeholder="Escribe aqui tu mensaje y te contactaremos." className="input" onChange={(e) => {cambioMensaje(e.target.value)}} />
                            <div className="boton-enviar">
                                <input type="submit" value="Enviar" className="enviar" onClick={ comprobarEmail } />
                            </div>
                        </form>
                    </div> 
                    {popup ? 
                    <div className="contacto-popup">
                        <p>También podés contactarnos en nuestras redes!</p>
                    </div>
                    :
                    <></>
                    }
                    
                </div>
             }  
            </div>
        </main>
    )
}

export default Contacto