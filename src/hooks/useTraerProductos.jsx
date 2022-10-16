import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import appFirebase from "../firebase/config"

const db = getFirestore(appFirebase)

export function useTraerProducto() {
    const [ lista, cambioLista ] = useState([])
        
    useEffect(()=> {
        const obtenerLista = async()=>{
            try {
                const consultaLista = await getDocs(collection(db, 'Stock'))
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
    
    return{
        lista,
    }
}
