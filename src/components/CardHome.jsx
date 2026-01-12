import '../css/CardHomes.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


function CardHome () {
  return (
    <Card style={{ width: '18rem', margin:'1rem' }}>
      <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <ItemCount stock={10}/>
        <Button  className= 'd-block mx-auto' variant="danger">Agregar al Carrito</Button>
      </Card.Body>


      <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <p></p>
        <ItemCount stock={10}/>
        <Button  className= 'd-block mx-auto' variant="danger">Agregar al Carrito</Button>
      </Card.Body>

 <Card.Img variant="top" src="../public/imagenesCards/CardHome1.jpg" alt='Card Home' />
      <Card.Body>
        <Card.Title style={{color:'brown'}}>CAMA MOISES ARTESANAL</Card.Title>
        <ItemCount stock={10}/>
        <Button  className= 'd-block mx-auto' variant="danger">Agregar al Carrito</Button>
      </Card.Body>


    </Card>





  );
}



export default CardHome;