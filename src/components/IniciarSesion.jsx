import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


const IniciarSesion = () => {
  const [usuario, setUsuario] = useState('')

  //Funcion para esuchar el evento del formulario
  // => la funcion recive el evento y este evento puede ser por partes.

  const usuarioHandler = (e) => {
    //console.log (e, 'evento')
    //console.log (e.target, 'el evento target en el input')
   // console.log (e.target.value, 'el valor en si del evento')

    //Capturar el eventoy guardarlo en un estado => se guarda en usuario
    setUsuario (e.target.value)
  }
  return (
    <div>
    
        <Form style={{padding:'1rem', width:'40rem'}}>
        <h4 >
            <Badge bg="danger" style={{letterSpacing:'3px'}}>INICIAR SESION</Badge>
        </h4>
          
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>USUARIO</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}}type="email" placeholder="Ingresar el email."  onChange={usuarioHandler}/>
        
        <Form.Text style={{fontStyle: 'italic', fontSize:'12px',fontWeight:'bolder'}}className="text-muted">
          Nunca compartiremos tu correo electrónico.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bolder', letterSpacing:'2px'}}>CONTRASEÑA</Form.Label>
        <Form.Control style={{fontSize:'13px',fontStyle: 'italic'}} type="password" placeholder="Ingresar su contraseña." />
      </Form.Group>

      <div  >
        <Button style={{margin:'1rem', backgroundColor:'brown', borderColor:'brown', fontWeight:'bolder', letterSpacing:'2px', fontSize:'12px'}} variant="primary" type="submit">
          Aceptar
        </Button>

        <Link  style={{fontWeight:'bolder', backgroundColor:'brown',letterSpacing:'2px',fontSize:'12px'}}className='btn btn-danger' to='/recuperarCuenta'>Recuperar Cuenta</Link>
        </div>


    </Form>

    <div  style={{textAlign:'center'}}>
       <Link  style={{fontWeight:'bolder'}}className='btn btn-dark' to='/'>Voler a Home</Link>
    </div>

  </div>
  )
}

export default IniciarSesion