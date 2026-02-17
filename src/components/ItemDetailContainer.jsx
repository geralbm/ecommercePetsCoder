import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../asyncMock/data'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({})
    const [cargando, setCargando] = useState (true)

    //Destructuring
    const {id} = useParams()
    useEffect (() => {

        getOneProduct(id)
        .then ((res) => setDetail (res))
        .catch((error) => console.log (error))
        .finally (() => setCargando(false))
    },[id]) //el useEffect esta a la escucha del ID
    //console.log(detail)
        //Finalizar el loading
       

  return (
    < >
       {
        cargando
        ? <Loader/> 
        : <div style={{display:'flex', justifyContent:'justify', alignItems:'center', flexWrap:'wrap', padding:'2rem'}}>
            <ItemDetail  detail ={detail}/> 
          </div>
       }

        
    </>
  )
}

export default ItemDetailContainer