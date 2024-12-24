import { Badge } from "@mui/material"
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {CarritoContext} from '../context/CarritoContext'

export const NavBar = () => {

  const {listaCompra} = useContext(CarritoContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink  to='/' className="navbar-brand" >Productos</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink  to='/' className="nav-link active">Productos</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to='/carrito' >
            <Badge color="secondary" badgeContent={listaCompra.length}>
              <ShoppingCart />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  )
}
