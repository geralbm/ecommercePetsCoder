import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div style={{margin:'5px'}}>
        
        <Alert variant="light"  style={{textAlign:'center'}}>
            <Alert.Heading>🚨Tu carrito esta vacio - suma nuevos productos.</Alert.Heading>
            <Link to = '/' className='btn btn-danger'>Ir a comprar</Link>
        </Alert>
    </div>
  )
}

export default EmptyCart