import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrearCuenta = () => {
  return (
    <div>
    <Form style={{padding:'2rem'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>USUARIO</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Ingresar el email." />
        <Form.Text style={{fontStyle: 'italic', fontSize:'12px',fontWeight:'bolder'}}className="text-muted">
          Nunca compartiremos tu correo electrónico.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>CONTRASEÑA</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}} type="password" placeholder="Ingresar su contraseña." />
      </Form.Group>

      <Button style={{margin:'1rem', backgroundColor:'brown', borderColor:'brown', fontWeight:'bolder', letterSpacing:'2px', fontSize:'12px'}} variant="primary" type="submit">
        Iniciar Sesión
      </Button>
        <Button style={{backgroundColor:'brown', borderColor:'brown',fontWeight:'bolder',letterSpacing:'2px',fontSize:'12px'}}variant="primary" type="submit">
         Recuperar Cuenta
      </Button>
    </Form>
    </div>
  )
}

export default CrearCuenta