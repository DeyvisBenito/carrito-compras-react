import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({ children }) => {



    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] agregar compra',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] aumentar cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] disminuir cantidad',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] eliminar compra',
            payload: id
        }
        dispatch(action)
    }

    const compraReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case ('[CARRITO] agregar compra'):
                return [...state, action.payload]
            case ('[CARRITO] aumentar cantidad'):
                return state.map(compra => {
                    const cant = compra.cantidad + 1
                    if (compra.id === action.payload) {
                        return { ...compra, cantidad: cant }
                    }
                    return compra
                })
            case ('[CARRITO] disminuir cantidad'):
                return state.map(compra => {
                    const cant = compra.cantidad - 1
                    if (compra.id === action.payload && compra.cantidad > 1) {
                        return { ...compra, cantidad: cant }
                    }
                    return compra
                })
            case ('[CARRITO] eliminar compra'):
                return state.filter(compra => compra.id !== action.payload)

            default:
                return state;
        }
    }

    const [listaCompra, dispatch] = useReducer(compraReducer, initialState)

    return (
        <CarritoContext.Provider value={{ listaCompra, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
