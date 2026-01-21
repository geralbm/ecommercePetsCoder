//Para la lista de productos - contendor de productos: Se trata la promesa creada en data.jsx
//Se piden los productos a traves de este componente
// - Ojo: se importa asi co {} porque se declatro y exporto en la misma linea en data.jsx

import {getProducts} from '../asyncMock/data';
import { useEffect, useState } from "react";
import ItemList from './ItemList';

//Listado de productos del Ecommerce
const ItemListContainer = () => {
const [data,setData] = useState ([])

useEffect ( () => { // se ejecuta una vez y no se actualiza
    //pedir datos 
    getProducts() // retorna una promesa
    .then ((res) => setData (res))//tratando la promesa y guardando las res en un estado que tiene un array vacio.
    .catch ((error) => console.log (error))
},[])

console.log (data);

    return (
        <div>
            <ItemList data = {data}/>
        </div>
    )
}
export default ItemListContainer