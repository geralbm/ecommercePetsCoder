import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Loader = ({text}) => {
  return (
    
    <div style={{with:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
          {text}
      </Button>
    </div>
    

   
  )
}

export default Loader