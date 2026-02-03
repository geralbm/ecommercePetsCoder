import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
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
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>CREAR USUARIO</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Ingresar un e-mail válido." />
        <Form.Text style={{fontStyle: 'italic', fontSize:'12px',fontWeight:'bolder'}}className="text-muted">
          Nunca compartiremos tu correo electrónico.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>INGRESE UNA CONTRASEÑA</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}} type="password" placeholder="Ingresar una contraseña." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>RE INGRESE LA CONTRASEÑA</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}} type="password" placeholder="Re Ingrese la contraseña." />
      </Form.Group>
 
    <Form.Group className="mb-3">
      <Form.Check
          required
          label="Aceptar las condiciones"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
    
        <Button style={{backgroundColor:'brown', borderColor:'brown',fontWeight:'bolder',letterSpacing:'2px',fontSize:'12px'}}variant="primary" type="submit">
         CREAR CUENTA
      </Button>
    </Form>
    
      <div  style={{textAlign:'center'}}>
       <Link  style={{fontWeight:'bolder'}}className='btn btn-dark' to='/'>Voler a Home</Link>
    </div>
  </div>
  )
}

export default CrearCuenta