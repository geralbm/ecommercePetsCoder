//Para la lista de productos - contendor de productos: Se trata la promesa creada en data.jsx
//Se piden los productos a traves de este componente
// - Ojo: se importa asi con {} porque se declatro y exporto en la misma linea en data.jsx
import '../css/SaludoBienvenida.css'
import {getProducts} from '../asyncMock/data';
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';



//Listado de productos del Ecommerce
const ItemListContainer = ({saludo}) => {
const [data,setData] = useState ([])
const [loading, setLoading] = useState(false)
const {type} = useParams ()
console.log ('Tipo:', type)

//Con Firebase
useEffect ( () => { // se ejecuta una vez y no se actualiza
    //Prender el loading
    setLoading(true)
    //1.Conectarse a la coleccion
    const prodCollection = type ? query(collection(db,"productos"), where("categoria", "==", type)) :collection(db,"productos")
    //2. Pedir los documentos
    getDocs(prodCollection)
    .then ((res) => {
        //Limpiar y ordenar los datos
        const list = res.docs.map((doc)=>{
            return {
                id:doc.id,
                //Acceder a los datos 
                ...doc.data()
            }
        })
        console.log (list)
        setData (list)

    })
    .catch ((error) => console.log (error))
    //Finalizar el loading
    .finally (() => setLoading(false))
    //escucha los tipos de categoria (type)
},[type])

   return (
    <>
    {
        loading
        ? <Loader text={type ? 'Cargando categoría...' : 'Cargando productos...'}/>
        : <div> 
            <div className = 'saludo-bienvenida'>
                <h3>{saludo} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h3>
                
               
            </div>

             <ItemList data = {data}/>
        </div>
    }
    </>
   )
}
export default ItemListContainer