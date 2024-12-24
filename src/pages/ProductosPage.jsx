import { useContext } from 'react'
import { Carts } from '../components/Carts'
import '../styles/card.css'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from "../context/CarritoContext"

export const ProductosPage = () => {

  const {agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)
  const {data} = useContext(ProductosContext)

  const handleAgregarCompra = (compra) =>{
    agregarCompra(compra)
  }
  const handreAumentarCantidad = (id) =>{

  }
  const handleDisminuirCantidad = (id) =>{

  }
  const handleEliminarCompra = (id) =>{
    eliminarCompra(id)
  }

  return (
    <>
      <h1 >Productos</h1>
      <div className="container">
        {data && data.map((producto) => (
          <Carts key={producto.id} image={producto.image} 
          title={producto.title} description={producto.description} price={producto.price}
          agregarCompra={() => handleAgregarCompra(producto)}
          aumentarCantidad={() => handreAumentarCantidad(producto.id)}
          disminuirCantidad={() => handleDisminuirCantidad(producto.id)}
          eliminarCompra= {() => handleEliminarCompra(producto.id)}
           />
        ))}
      </div>
    </>
  )
}
