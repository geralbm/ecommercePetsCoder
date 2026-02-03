import '../css/Footer.css';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className = 'footer-caja'>
                <li className = 'anchor-footer'><NavLink to='/contactanos'>Contactanos</NavLink></li>

                <li className = 'anchor-footer'><NavLink to='sucursales'>Sucursales</NavLink></li>
            </ul>

            

            <div className='copyR'>
                <span>©️ </span>
                <p> 2025 - Pets Love</p>
            </div>
        </div>
    )
}
export default Footer;