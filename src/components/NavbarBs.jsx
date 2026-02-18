import  '../css/NavbarEstilos.css';
import CartWigdet from "./CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function NavbarBs() {
return (
    <Navbar expand="lg" className="navBar ">
      <Container className='contenedorHome'>
        <Navbar.Brand as={NavLink} to='/' className='imgHome'>
          <img src='https://i.postimg.cc/C18wnLMk/logo.png' alt= 'Logo' style = {{width:'4rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <h1>PETS LOVE </h1>
            <Nav.Link as={NavLink} className='menu' to='/'>HOME</Nav.Link>
            <Nav.Link as={NavLink} className='menu' to='/category/mas vendidos'>MAS VENDIDOS</Nav.Link>
            <NavDropdown className='menu'  title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink}to='/category/ofertas'>OFERTAS</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <div className="sesionLink">
            <Nav.Link as={NavLink} to='/crearcuenta/'style={{color:'brown'}} className="text-center">Crear Cuenta</Nav.Link>
            <Nav.Link as={NavLink} to='/iniciosesion/' style={{color:'brown'}} className="text-center">Iniciar Sesión</Nav.Link>
          </div>

        </Navbar.Collapse>
        <NavLink to='/cart' style={{color:'black'}}>
            <CartWigdet/>
        </NavLink>
       
      </Container>
      
    </Navbar>
  );
}


export default NavbarBs;