import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { CartContex } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import EmptyCart from './EmptyCart';

const Checkout = () => {
   const [buyer,setBuyer] = useState ({})
   const {cart, total, clear} = useContext(CartContex)
   const [orderId, setOrderId] = useState (null)
   const [error, setError] = useState (null)
   const [process, setProcess] = useState (false)

   const buyerData = (e) => {
    setBuyer(
        {
            ...buyer,
            [e.target.name]: e.target.value
        }
    )
   }

const finalizarCompra = (e) => {
//para que no recargue la app
e.preventDefault()

if (!buyer.name || !buyer.apellido || !buyer.email || !buyer.email2){
    setError ('Por favor complete los campos.')
}else if (buyer.email !== buyer.email2){
    setError ('Los correos no coinciden.')
}else {
    //Prender Loader
    setProcess(true)
    setError(null)
    //Armar el objeto de orden para enviar
    let orden = {
        comprador:buyer,
        comprar: cart,
        total:total(),
        date: serverTimestamp()
    }
    //Crear una nueva collección en Firebase
    const ventas = collection(db,"orders")
    //Agregar un documento
    addDoc(ventas, orden) // retorna una promesa
    .then((res)=> {
    setOrderId(res.id)
    //Si sale la compra con éxito => vaciar el carrito
    clear()
    })
    .catch ((error)=>console.log(error))
    //Apagar Loader
    .finally(()=> setProcess(false))
    }
}

console.log (buyer)

if (!cart.length && !orderId){
    return <EmptyCart/>
}

  return (
    <>
        {
            orderId
            ?     <div style={{textAlign:'center', padding:'2rem'}}>
                    <h3 >❗❗❗Felicidades, generaste con éxito tu compra.👌 </h3>
                    <h5 >Su número de orden es: {orderId} </h5>
                    <Link  className='btn btn-dark' to='/'>Voler a Home</Link>
                </div>
            :    <div>
                    <h4 >
                        <Badge bg="danger" style={{letterSpacing:'3px', margin:'1rem'}}>COMPLETE LOS DATOS POR FAVOR:</Badge>
                    </h4>
                    {error && <span style={{color:'red'}} >❗❗❗{error} </span> }
                <Form style={{padding:'1rem', width:'40rem'}} onSubmit={finalizarCompra}>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>NOMBRE</Form.Label>
                        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="text" placeholder="Ingresar Nombre." name='name' onChange={buyerData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>APELLIDO</Form.Label>
                        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="text" placeholder="Ingresar Apellido." name='apellido' onChange={buyerData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>INGRESE SU CORREO</Form.Label>
                        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Ingresar un e-mail válido." name='email' onChange={buyerData}/>
                        <Form.Text style={{fontStyle: 'italic', fontSize:'12px',fontWeight:'bolder'}}className="text-muted">
                        Nunca compartiremos tu correo electrónico.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>REPITA SU CORREO</Form.Label>
                        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Repita su correo." name='email2' onChange={buyerData} />
                    </Form.Group>

    
                    <Button style={{backgroundColor:'brown', borderColor:'brown',fontWeight:'bolder',letterSpacing:'2px',fontSize:'12px'}}variant="primary" type="submit" disabled={process}>
                    {process ? 'Procesando compra' : 'Generar Orden'}
                  </Button>
               </Form>
    
      <div  style={{textAlign:'center'}}>
       <Link  style={{fontWeight:'bolder'}}className='btn btn-dark' to='/'>Voler a Home</Link>
    </div>



    </div>
        }
    </>
  )
}

export default Checkout