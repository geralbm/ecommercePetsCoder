import React from 'react'
import {Link} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import '../css/Error.css'

const Error = () => {
  return (
    <div style={{textAlign:'center', padding:'2rem'}}>
        <h3 >❗❗❗Error: No se encuentra la página 🚨</h3>
        <Link  className='btn btn-dark' to='/'>Voler a Home</Link>
    </div>
  )
}

export default Error