
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './ItemCount';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';


function CardHome () {

  return (
        <CardGroup>

      <Card>
        <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt="Card Home"/>
        <Card.Body>
          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>CAMA MOISES ARTESANAL - PARA PERROS & GATOS - VARIOS TAMAÑOS</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>$120.000</strong></h5>
          <p bg="success" className="text-center"> Tela de gabardina en elegante combinación de rayas blanco y gris o blanco y beige.<Badge bg="success">Nuevo</Badge></p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={10}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Agregar al Carrito</strong></Button>
        </Card.Footer>
      </Card>


    <Card>
        <Card.Img variant="top" src="../public/imagenesCards/CardHome2.jpg" alt="Card Home"/>
        <Card.Body>
          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>CAMA PUFF - PELO DE MONO - ANTIESTRES</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>$105.000</strong></h5>
          <p bg="success" className="text-center"> Puff artesanal, diseñado para brindar con suavidad y calma a la mascota, simulando pelaje de otro animalito.</p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={10}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Agregar al Carrito</strong></Button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="../public/imagenesCards/CardHome3.jpg" alt="Card Home"/>
        <Card.Body>
          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>COMEDERO NET SIMPLE - PERROS MEDIANOS</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>$85.000</strong></h5>
          <p bg="success" className="text-center">Con un estilo moderno, este modelo NET diseñado en una sola pieza de acero ofrece calidad y durabilidad priorizando siempre el beneficio de tus mascotas.</p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={10}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Agregar al Carrito</strong></Button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="../public/imagenesCards/CardHome4.jpg" alt="Card Home"/>
        <Card.Body>

          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>CUBRE SILLON - PELO DE MONO Y TUSSOR REVERSIBLE</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>$95.000</strong></h5>
          <p bg="success" className="text-center"> Con nuestro cubre sillón transforma tu sillón en un espacio acogedor y protegido. Diseñado especialmente para que tus mascotas puedan acompañarte sin preocupaciones, este cubre sillón es la solución ideal para mantener la limpieza y el confort en tu hogar.</p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={10}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Agregar al Carrito</strong></Button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="../public/imagenesCards/CardHome5.jpg" alt="Card Home"/>
        <Card.Body>
          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>COMEDERO / BEBEDERO PLEGABLE DE SILICONA</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>$9.500</strong></h5>
          <p bg="success" className="text-center"> Retractil, para mayor comodidad de guardado y traslado!.Incluye gancho para colgártelo fácil (de correa, bolso, etc)<Badge bg="success">Nuevo</Badge></p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={10}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Agregar al Carrito</strong></Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardHome;