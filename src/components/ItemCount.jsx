//Uso de Hook -  USE STATE REACT
import { useState} from "react";
import Badge from 'react-bootstrap/Badge';



//Declaracion de Hook
const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0)
    
    
    //Funcion que suma en el contador de productos
    const sumar = ()=>{
        if (counter < stock){
            setCounter(counter + 1) 
        }
    }

    //Funcion que resta el contador de productos
    const restar = () =>{
        if (counter > 0){
            setCounter(counter - 1)
        }
    }
    
    return (
        <div className="w-50 mx-auto bg-light p-3 d-flex justify-content-center align-items-center">
            <Badge bg="danger"  onClick={restar}>-</Badge>
            <Badge bg="secondary">{counter}</Badge>
            <Badge bg="success" onClick={sumar}>+</Badge>
            
        </div>
    )
}
export default ItemCount;