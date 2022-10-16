import { addDoc, getDocs, collection, getFirestore, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import appFirebase from "../../../firebase/config"

import AdministradorAgregarProductos from "../AdministradorAgregarProductos/AdministradorAgregarProductos"
import AdministradorListaProductosAgregados from "../AdministradorListaProductosAgregados/AdministradorListaProductosAgregados"
import AdministradorProductosAgregados from "../AdministradorProductosAgregados/AdministradorProductosAgregados"

const db = getFirestore(appFirebase)

const AdministradorStock = ({ cambioOpcion }) => {
    
    const valorInicial = {
        categoria: "",
        url:"",
        nombre:"",
        talle:"",
        stock:"",
        precio:""
    }
    
    const [ valor, definirValor ] = useState(valorInicial)
    const [ lista, cambioLista ] = useState([])
    const [ agregarMostrar, cambioAgregarMostrar ] = useState(true)
    const [ idSeleccionado, cambioIdSeleccionado ] = useState()

    const capturarValores = (e)=>{
        const {name, value} = e.target
        definirValor({...valor, [name]:value})
    }

    const guardarDatos = async(e)=>{
        e.preventDefault()
        try {
            await addDoc(collection(db,'Stock'),{
                ...valor
            })
        } catch (error) {
            console.log(error)
        }
        definirValor({...valorInicial})
        obtenerLista()
        alert('Se agrego correctamente al stock.')
    }

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

    useEffect(()=> {
        obtenerLista()
    },[])

    let productoSeleccionado = lista.filter(obj => obj.id === idSeleccionado)

    function eliminarProducto(id) {
        deleteDoc(doc(db, "Stock", id));
        cambioAgregarMostrar(true)
        alert('El Producto se eliminó.')
        obtenerLista()
    }
    function deshabilitarStock(id) {
        updateDoc(doc(db, "Stock", id), {
            stock:"-"
        })
        alert('Se deshabilito el stock del producto.')
        obtenerLista()
    }
    function modificarStock(stock, id){
        updateDoc(doc(db, "Stock", id), {
            stock: stock
        })
        alert('Se modificó el stock del producto.')
        obtenerLista()
    }
    function modificarPrecio(precio, id){
        updateDoc(doc(db, "Stock", id), {
            precio: precio
        })
        alert('Se modificó el precio del producto.')
        obtenerLista()
    }
 
    return(
        <div className="contenedor-consultas-tienda">
            <div className="consulta-volver">
                <img src="https://drive.google.com/uc?id=1aH5firbCWie8bTHRw5LAqdz2ZfsOqSjW" alt="Volver" onClick={()=>{cambioOpcion("")}} />
            </div>

            <AdministradorListaProductosAgregados 
            cambioAgregarMostrar={cambioAgregarMostrar}
            lista={lista}
            cambioIdSeleccionado={cambioIdSeleccionado}
            />
            
            {
                agregarMostrar ?
                <AdministradorAgregarProductos 
                capturarValores={capturarValores}
                valor={valor}
                guardarDatos={guardarDatos}
                />
                :
                <AdministradorProductosAgregados
                productoSeleccionado={productoSeleccionado}
                eliminarProducto={eliminarProducto}
                deshabilitarStock={deshabilitarStock}
                modificarStock={modificarStock}
                modificarPrecio={modificarPrecio}
                />
            }
        </div>
    )

}

export default AdministradorStock