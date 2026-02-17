
import { PiShoppingCartFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContex } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ()=> {
    const {cart} = useContext (CartContex)
    console.log (cart)
    return (
        <div>
            <PiShoppingCartFill fontSize={'1.5rem'} />
            <Badge bg="danger">0</Badge>
        </div>
    )
}
export default CartWidget
