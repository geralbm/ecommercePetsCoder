import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {
    const onAdd = (cantidad) => {
      console.log(`Agregaste ${cantidad} unidades del producto ${detail.nombre}`)
    }


  return (
    <div>
        
      <CardGroup >
      <Card style={{ width: '40rem', margin:'1rem', padding:'1rem'}} >
        <Card.Img  style={{width:'250px'}} variant="top" src={detail.img} alt="Card Home"  className="mx-auto d-block" />
        <Card.Body >  
          <h4 style={{color:'brown' }} className="text-center" ><strong>{detail.nombre}</strong></h4>
          <h5 style={{color:'grey'}} className="text-center"><strong>${detail.precio}.00</strong></h5>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>{detail.descripcion}</strong> </p>
          <p style={{color:'grey'}} bg="success" className="text-center"> <strong>Categoria:</strong> {detail.categoria}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Acepta Transferencia: </strong> {detail.pagoTransferencia}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Acepta Cuotas:</strong>  {detail.pargoCuotas}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Envío Gratis:</strong>  {detail.envioGratis}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Acepta Descuento:</strong>  {detail.descuento}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Color:</strong> {detail.color}</p>
          <p style={{color:'grey'}} bg="success" className="text-center"><strong>Tamaño:</strong>  {detail.tamaño}</p>
        </Card.Body>
        <Card.Footer style={{textAlign:'center'}} >
          <ItemCount stock={detail.stock} onAdd={onAdd}/>
        </Card.Footer>
      </Card>
    </CardGroup>
    <div  style={{textAlign:'center'}}>
       <Link  className='btn btn-dark ' style={{fontWeight:'bolder'}} to='/'>Voler a Home</Link>
    </div>
    
    </div>
  )
}

export default ItemDetail