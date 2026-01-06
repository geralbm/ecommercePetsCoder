import CartWigdet from "./CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavbarBs() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src='./src/assets/images/logo.png' alt= 'Logo' style = {{width:'4rem'}}/>PETS SHOPS - ECOMMERCE 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas</Nav.Link>
            <Nav.Link href="#link">Mas Vendidos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
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
        </Navbar.Collapse>
        <CartWigdet/> 
      </Container>
      
    </Navbar>
  );
}


export default NavbarBs;