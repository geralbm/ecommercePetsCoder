import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import { CartContex } from '../context/CartContext';
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CartView = () => {
    const {cart, removeItem, clear, total} = useContext(CartContex)
  return (
    <div>
        <h4 style={{padding:'1rem', width:'40rem'}} >
            <Badge bg="danger" style={{letterSpacing:'3px'}}>Tu carrito: </Badge>
        </h4>

        <div>
            {cart.map ((compra) =>(
                <div key ={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                 <img src={compra.img} alt={compra.nombre} style={{width:'8rem'}}/>
                 <span>{compra.nombre}</span>
                 <span>Precio x Unidad: ${compra.precio}</span>
                 <span>cantidad: {compra.quantity}</span>
                 <span>Precio Final: ${compra.precio * compra.quantity}</span>
                <HiArchiveBoxXMark fontSize={'1.5rem'}  style={{color:'red'}}onClick={() => removeItem(compra.id)}/>
                </div>
            ))}
        </div>
       { /*Llamar y armar una funcion en contexto que devuelva un resultado de total a pagar */}
        <span style={{margin:'2rem'}}>Total a pagar: ${total()},00</span>

        <div style={{padding:'1rem'}}>
            <button className='btn btn-danger' style={{margin:'1rem'}} onClick={clear}>Vaciar Carrito</button>
            <button className='btn btn-success' style={{margin:'1rem'}}>Terminar Compra</button>
        </div>

      <div  style={{textAlign:'center'}}>
       <Link  style={{fontWeight:'bolder'}}className='btn btn-dark' to='/'>Ver más productos</Link>
    </div>

    </div>

  )
}

export default CartView