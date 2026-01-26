import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../asyncMock/data'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({})


    //Destructuring
    const {id} = useParams()
    useEffect (() => {
        getOneProduct(id)
        .then ((res) => setDetail (res))
        .catch((error) => console.log (error))
    },[id]) //el useEffect esta a la escucha del ID
    //console.log(detail)
  return (
    <div style={{display:'flex', justifyContent:'justify', alignItems:'center', flexWrap:'wrap', padding:'2rem'}}>
        <ItemDetail detail ={detail}/>
    </div>
  )
}

export default ItemDetailContainer