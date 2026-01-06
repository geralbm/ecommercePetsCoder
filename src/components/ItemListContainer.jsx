
import '../css/ItemListContainer.css'
//Listado de productos del Ecommerce
const ItemListContainer = ({saludo}) => {
    
    return (
        <div className = 'saludo-bienvenida'>
            <h3>{saludo}</h3>
        </div>
    )
}
export default ItemListContainer