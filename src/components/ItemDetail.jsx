import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
    
  return (
    <div>
        
      <CardGroup >
      <Card  >
        <Card.Img variant="top" src={detail.img} alt="Card Home"/>
        <Card.Body>
          <Nav.Link href="#link" style={{color:'brown'}} className="text-center" ><strong>{detail.nombre}</strong></Nav.Link>
          <h5 style={{color:'grey'}} className="text-center"><strong>${detail.precio}.00</strong></h5>
          <p bg="success" className="text-center"> {detail.descripcion}</p>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={detail.stock}/>
          <Button  className= 'd-block mx-auto' variant="danger"><strong>Comprar</strong></Button>
        </Card.Footer>
      </Card>


    </CardGroup>

    </div>
  )
}

export default ItemDetail