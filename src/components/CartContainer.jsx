import React, { useContext, useState } from 'react'
import { CartContex } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const {cart} = useContext (CartContex)
  return (
    <>
    {
       cart.length
        ? <CartView/>
        //Carrito vacio
        : <EmptyCart />
    
    }
    </>
  )
}

export default CartContainer