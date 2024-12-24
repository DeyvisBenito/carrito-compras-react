import { useContext, useState } from "react"



export const Carts = ({image, title, description, price, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra})=> {
    const [agregado, setagregado] = useState(false)

    

    const onClickQuitar  = () =>{
        setagregado(false)
        eliminarCompra()
    }
    const onClickAgregar = () =>{
        setagregado(true)
        agregarCompra()
    }

    return (
        <>

            <div className="tarjeta" >
                <img className="tarjeta-imagen" src={image} alt={title}></img>
                <div className="tarjeta-contenido">
                    <h3 className="tarjeta-titulo">{title}</h3>
                    <p className="tarjeta-descripcion">{description}</p>
                    <p className="tarjeta-precio">{price}</p>

                    {agregado
                        ? <button className="boton-quitar"  type="button" onClick={onClickQuitar}>Quitar al Carrito</button>
                        : <button className="boton-agregar" type="button" onClick={onClickAgregar}>Agregar del carrito</button>
                    }
                </div>
            </div>
        </>
    )
}
