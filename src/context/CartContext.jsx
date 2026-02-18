import { createContext, useState } from "react";

//Crear contexto
export const CartContex = createContext()

//Crear el proveedor
export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

    //Funciones (herramientas)
        //Agregar item al carrito => se usa en el componente itemDetail
        const addItem = (item,qty) => {
            //console.log (item, qty)
            //console.log ({...item, quantity:qty})
            if (isInCart (item.id)){
                //ya existe en el carrito => modificar cantidades
                setCart (
                    cart.map ((prod) => {
                        if ( prod.id === item.id){
                            //sumar cantidades
                            return {...prod, quantity: prod.quantity + qty}
                        }else {
                            // retornar sin modificar
                            return prod
                        }
                    })
                )
            }else {
                //Agrega el producto porque seria "nuevo"
                setCart([...cart, {...item, quantity:qty}])
            }
            
    }   

        //Borrar el carrito => se usa en el componente Cart y Checkout
        const clear = () =>{
            setCart([])
        }

        //Eliminar un item del carrito => se usa en el componente Cart
        const removeItem = (id) => {
            setCart(cart.filter ((prod) => prod.id !== id))

        }

        const isInCart = (id) => {
            return cart.some ((prod) => prod.id === id)
        }

        //Pagar el total
        const total = () => {

        }


        //Sumar cantidades
        const cartQuantity = () => {

        }

    return (
        <CartContex.Provider value={{cart, addItem, removeItem, total, cartQuantity, clear}}>
            {children}
        </CartContex.Provider>
    )
}