import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import appFirebase from "../../../firebase/config"
import AdministradorMostrarPedido from "../AdministradorMostrarPedido/AdministradorMostrarPedido"

const db = getFirestore(appFirebase)

const AdministradorPedidos = ({ cambioOpcion }) => {
    
    const [ lista, cambioLista ] = useState([])
    const [ obj, cambioObj]  = useState()

    useEffect(()=> {
        const obtenerLista = async()=>{
            try {
                const consultaLista = await getDocs(collection(db, 'Ordenes'))
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


    return(
        <div className="contenedor-pedidos-tienda">
            <div className="seleccionar-pedidos">
                <div className="consulta-volver">
                    <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver" onClick={()=>{cambioOpcion("")}} />
                </div>
                {
                    lista.map(obj => (
                        <div key={obj.id} className="contenedor-pedido-individual">
                            <div key={obj.id} className="pedido-individual" onClick={() => cambioObj(obj)}>
                                <p>{obj.cliente.datos.email}</p>
                                <p>Fecha de compra: {obj.fecha}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="contenedor-mostrar-pedidos">
                {obj ? <AdministradorMostrarPedido obj={obj} /> : <></>}
            </div>
        </div>
    )
}

export default AdministradorPedidos