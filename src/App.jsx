import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBs from './components/NavbarBs'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'


//Componentes para navegacion:
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavbarBs/>

      <Routes>

        <Route path = '/' element= {<ItemListContainer saludo = 'BIENVENIDOS AL MUNDO DE TUS MASCOTAS'/>}></Route>
        
        <Route path = '/category/:type' element= {<ItemListContainer saludo = 'ESTAS EN LA CETEGORIA: '/>}></Route>

        <Route path='/itemDetail/:id' element={<ItemDetailContainer/>}></Route>

        <Route path='*' element={<Error/>}></Route>
      </Routes>
      
      
      

      <Footer/>
    </BrowserRouter>
  )
}

export default App
