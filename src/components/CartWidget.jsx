
import { PiShoppingCartFill } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ()=> {
    return (
        <div>
            <PiShoppingCartFill fontSize={'1.5rem'} />
            <Badge bg="primary">5</Badge>
        </div>
    )
}
export default CartWidget