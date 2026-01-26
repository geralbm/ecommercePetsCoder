//Para la lista de productos - contendor de productos: Se trata la promesa creada en data.jsx
//Se piden los productos a traves de este componente
// - Ojo: se importa asi co {} porque se declatro y exporto en la misma linea en data.jsx
import '../css/SaludoBienvenida.css'
import {getProducts} from '../asyncMock/data';
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import TituloHome from './TituloHome';
import { useParams } from 'react-router-dom';


//Listado de productos del Ecommerce
const ItemListContainer = ({saludo}) => {
const [data,setData] = useState ([])
const {type} = useParams ()
console.log ('Tipo:', type)

useEffect ( () => { // se ejecuta una vez y no se actualiza
    //pedir datos 
    getProducts() // retorna una promesa
    .then ((res) => {
        if (type){
            //filtrar
            setData (res.filter((prod)=>prod.categoria === type))
        }else{
            setData(res) //No filtro, entonces se trabaja la promesa.
        }
    })//tratando la promesa y guardando las res en un estado que tiene un array vacio.
    .catch ((error) => console.log (error))
},[type])

console.log (data);

    return (
        <div> 
            <div className = 'saludo-bienvenida'>
                <h3>{saludo} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h3>
            </div>

            <TituloHome/>
             <ItemList data = {data}/>
        </div>
    )
}
export default ItemListContainer