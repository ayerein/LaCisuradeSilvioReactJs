import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import appFirebase from "../../../firebase/config"

const db = getFirestore(appFirebase)

const AdministradorConsultas = ({seleccionarOpcion}) => {
    const [lista, cambioLista] = useState([])
    const [obj, cambioObj] = useState()

    useEffect(()=> {
        const obtenerLista = async()=>{
            try {
                const consultaLista = await getDocs(collection(db, 'Consultas'))
                const docs = []
                consultaLista.forEach((doc)=>{
                    docs.push({...doc.data(), id:doc.id})
                })
                cambioLista(docs)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerLista()
    },[])

    const mostrarMensaje = (obj) =>{
        return(
            <>
                <div className="msj-encabezado">
                    <p>Nombre: {obj.datos.nombre}</p>
                    <p>Telefono: {obj.datos.telefono}</p>
                    <p>Email: {obj.datos.emailInput}</p>
                </div>
                <div className="msj-cuerpo">
                    <p className="p-asunto">Asunto: {obj.mensaje.asunto}</p>
                    <p className="p-mensaje">{obj.mensaje.mensaje}</p>
                </div>
            </>
        )
    }

    return(
        <div className="contenedor-consultas-tienda">
            <div className="contenedor-seleccionar">
                <div className="consulta-volver">
                    <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver" onClick={()=>{seleccionarOpcion("")}} />
                </div>
                {
                    lista.map(obj => (
                        <div key={obj.id} className="contenedor-consulta-individual">
                            <div key={obj.id} className="consulta-individual" onClick={() => cambioObj(obj)}>
                                <p>{obj.datos.nombre}</p>
                                <p className="p-asunto">Asunto: {obj.mensaje.asunto}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="contenedor-mostrar-consultas">
                {obj ? mostrarMensaje(obj) : <></>}
            </div>
        </div>
    )
}

export default AdministradorConsultas