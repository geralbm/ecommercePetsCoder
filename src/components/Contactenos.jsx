import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Contactenos = () => {
  return (
   
    <div>
     <Form style={{padding:'2rem', width:'40rem'}}> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>NOMBRE</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="text" placeholder="Ingresar Nombre." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>APELLIDO</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="text" placeholder="Ingresar Apellido." />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>INGRESE UN CORREO ELECTRONICO</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Ingresar un e-mail válido." />
        <Form.Text style={{fontStyle: 'italic', fontSize:'12px',fontWeight:'bolder'}}className="text-muted">
          Nunca compartiremos tu correo electrónico.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}} >DEJANOS TU MENSAJE:</Form.Label>
        <Form.Control as="textarea"  style={{fontSize:'13px',fontStyle: 'italic'}}placeholder="Escribe tu mensaje." rows={3} />
      </Form.Group>

      <Button style={{backgroundColor:'brown', borderColor:'brown',fontWeight:'bolder',letterSpacing:'2px',fontSize:'12px'}}variant="primary" type="submit">ENVIAR
      </Button>
    </Form>

    <div  style={{textAlign:'center'}}>
       <Link  style={{fontWeight:'bolder'}}className='btn btn-dark' to='/'>Voler a Home</Link>
    </div>

  </div>
 

    
   
  )
}

export default Contactenos