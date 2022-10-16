import { createContext, useContext, useState } from "react";

const Contexto = createContext([])

export const UsarContexto = () => useContext(Contexto)

const ProveedorContexto = ({children}) => {

    const [listaCarrito, cambioListaCarrito] = useState([])

    function añadirAlCarrito(obj) {
        const index = listaCarrito.findIndex(producto => producto.id === obj.id)
        if (index !== -1) {
            listaCarrito[index].contador += obj.contador
            cambioListaCarrito([ ...listaCarrito])
        } else {
            cambioListaCarrito([
                ...listaCarrito,
                obj   
            ])
        }
    }
    function restarCart(obj) {
        const index = listaCarrito.findIndex(producto => producto.id === obj.id)
        if (index !== -1) {
            listaCarrito[index].contador -= 1
            cambioListaCarrito([ ...listaCarrito])
        }
    }
    function sumarUno(obj){
        const index = listaCarrito.findIndex(producto => producto.id === obj.id)
        listaCarrito[index].contador += 1
        cambioListaCarrito([ ...listaCarrito])
    }

    const vaciarCarrito = () => {
        cambioListaCarrito([])
    }
    const restarCantidad = (obj) => {
        (obj.contador > 1) && restarCart(obj)
    }
    const sumarCantidad = (obj) => {
        (obj.contador < obj.stock) && sumarUno(obj)
    }
    const removerItem = (id) => {
        cambioListaCarrito(listaCarrito.filter(prod => prod.id !== id))
    }
    const precioTotal = () => {
        return listaCarrito.reduce((contador, prod) => contador + (prod.contador * prod.precio) ,0)
    }

    return (
        <Contexto.Provider value={{
            listaCarrito,
            añadirAlCarrito,
            vaciarCarrito,
            restarCantidad,
            sumarCantidad,
            removerItem,
            precioTotal,
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default ProveedorContexto