import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className = 'footer-caja'>
                <li className = 'anchor-footer'><a href="#">Contactanos</a></li>
                <li className = 'anchor-footer'><a href="#">Sucursales</a></li>
            </ul>

            

            <div className='copyR'>
                <span>©️ </span>
                <p> 2025 - Pets Love</p>
            </div>
        </div>
    )
}
export default Footer;