import { useFetch } from "../hooks/useFetch"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({children}) => {

    const { data } = useFetch('https://fakestoreapi.com/products')

  return (
    <ProductosContext.Provider value={{data}}>
        {children}
    </ProductosContext.Provider>
  )
}
