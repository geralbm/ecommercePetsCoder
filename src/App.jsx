import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBs from './components/NavbarBs'
import Footer from './components/Footer'
import CardHome from './components/CardHome'
import TituloHome from './components/TituloHome'
import SaludoBienvenida from './components/SaludoBienvenida'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      <NavbarBs/>
      <SaludoBienvenida saludo = 'BIENVENIDOS AL MUNDO DE TUS MASCOTAS' />
      <TituloHome />
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
    </>
  )
}

export default App
