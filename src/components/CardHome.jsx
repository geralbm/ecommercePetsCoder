
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './ItemCount';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CardHome = ({producto})=> {
  console.log (producto);
  return (

      <CardGroup >
      <Card style={{ width: '18rem', margin:'1rem', padding:'1rem'}} >
        <Card.Img variant="top" src={producto.img} alt="Card Home"/>
        <Card.Body>
          <Link  style={{color:'brown'}} className="d-flex justify-content-center" to={`/ItemDetail/${producto.id}`}><strong>{producto.nombre}</strong></Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>${producto.precio}.00</strong></h5>
          <p bg="success" className="text-center"> {producto.descripcion}<Badge bg="success">Nuevo</Badge></p>
        </Card.Body>
        <Card.Footer>
        
          <Link  className="d-flex justify-content-center btn btn-danger" to={`/ItemDetail/${producto.id}`}>
                <Button  className= 'd-block mx-auto' variant="danger"><strong>Ver Más</strong> 
                </Button>
          </Link>

        </Card.Footer>
      </Card>


    </CardGroup>
  );
}

export default CardHome;