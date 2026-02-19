import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../asyncMock/data'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { db } from '../service/firebase'
import { getDoc, doc } from 'firebase/firestore'
import {Link} from 'react-router-dom'
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({})
    const [cargando, setCargando] = useState (true)
    const [invalido, setInvalido] = useState (null)
    const {id} = useParams()
  //Firebase
      useEffect (() => {
        const docRef = doc(db,"productos", id)
        getDoc (docRef)
        .then ((res)=> {
          //Validacion
          if (res.data()){
           setDetail({
            id:res.id,
            ...res.data()
          })           
          }else {
            //No existe el producto
            setInvalido (true)
          }

        })
        .catch((error) => console.log (error))
        .finally (() => setCargando(false))
    },[id])


       //Avisar al usuario que ese producto no existe
       if (invalido){
        return (
          <div style={{textAlign:'center', padding:'2rem'}}>
              <h3 >🚨 No se encuentra disponible el producto buscado. 🚨</h3>
              <Link  className='btn btn-dark' to='/'>Voler a Home</Link>
        </div>
        )
       }

  return (
    < >
       {
        cargando
        ? <Loader text= ' Cargando detalle...'/> 
        : <div style={{display:'flex', justifyContent:'justify', alignItems:'center', flexWrap:'wrap', padding:'2rem'}}>
            <ItemDetail  detail ={detail}/> 
          </div>
       }

        
    </>
  )
}

export default ItemDetailContainer