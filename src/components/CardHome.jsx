import '../css/CardHomes.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardHome () {
  return (
    <Card style={{ width: '18rem', margin:'1rem' }}>
      <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <Button  className= 'button-home' variant="danger">Agregar al Carrito</Button>
      </Card.Body>


 <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <Button  className= 'button-home' variant="danger">Agregar al Carrito</Button>
      </Card.Body>

 <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <Button  className= 'button-home' variant="danger">Agregar al Carrito</Button>
      </Card.Body>


    </Card>





  );
}



export default CardHome;