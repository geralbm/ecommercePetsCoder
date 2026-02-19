import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBs from './components/NavbarBs'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import IniciarSesion from './components/IniciarSesion'
import CrearCuenta from './components/CrearCuenta'
import Contactenos from './components/Contactenos'
//Componentes para navegacion:
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecuperarCuenta from './components/RecuperarCuenta'
//Importar al Proveedor del contexto
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'

function App() {

  return (
    <BrowserRouter>
      

    <CartProvider>
      <NavbarBs/>
      <Routes>

        <Route path = '/' element= {<ItemListContainer saludo = 'BIENVENIDOS AL MUNDO DE TUS MASCOTAS'/>}></Route>
        
        <Route path = '/category/:type' element= {<ItemListContainer saludo = 'ESTAS EN LA CATEGORIA: '/>}></Route>

        <Route path = '/iniciosesion' element={<IniciarSesion/>}></Route>

        <Route path = '/recuperarCuenta' element={<RecuperarCuenta/>}></Route>

        <Route path='/crearcuenta' element={<CrearCuenta/>}></Route>

        <Route path='/contactanos' element={<Contactenos/>}></Route>

        <Route path='/itemDetail/:id' element={<ItemDetailContainer/>}></Route>

        <Route path='/cart' element={<CartContainer/>}></Route>

        <Route path='/checkout' element={<Checkout/>}></Route>

        <Route path='*' element={<Error/>}></Route>
        
      </Routes>

  </CartProvider>   

      <Footer/>
    </BrowserRouter>
  )
}

export default App