import  '../css/NavbarEstilos.css';
import CartWigdet from "./CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarBs() {
return (
    <Navbar expand="lg" className="navBar ">
      <Container className='contenedorHome'>
        <Navbar.Brand href="#home" className='imgHome'>
          <img src='./src/assets/images/logo.png' alt= 'Logo' style = {{width:'4rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <h1>PETS LOVE </h1>
            <Nav.Link className='menu' href="#home">OFERTAS</Nav.Link>
            <Nav.Link  className='menu' href="#link">MAS VENDIDOS</Nav.Link>
            <NavDropdown className='menu'  title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Peces
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gatos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="sesionLink">
            <Nav.Link href="#link" style={{color:'brown'}} className="text-center">Crear Cuenta</Nav.Link>
            <Nav.Link href="#link" style={{color:'brown'}} className="text-center">Iniciar Sesión</Nav.Link>
          </div>

        </Navbar.Collapse>
        <CartWigdet/> 
      </Container>
      
    </Navbar>
  );
}


export default NavbarBs;