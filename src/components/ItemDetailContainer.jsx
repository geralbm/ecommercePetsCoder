import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../asyncMock/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({})

    useEffect (() => {
        getOneProduct ('04')
        .then ((res) => setDetail(res))
        .catch ((error) => console.log (error))
    }, [])
  return (
    <div>
        <ItemDetail detail = {detail}/>
    </div>
  )
}

export default ItemDetailContainer