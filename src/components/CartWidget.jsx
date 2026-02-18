
import { PiShoppingCartFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContex } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ()=> {
    const {cart, cartQuantity} = useContext (CartContex)
    
    return (
        <div>
            <PiShoppingCartFill fontSize={'1.5rem'} />
            {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidget
