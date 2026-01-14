import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBs from './components/NavbarBs'
import Footer from './components/Footer'
import CardHome from './components/CardHome'
import TituloHome from './components/TituloHome'

function App() {

  return (
    <>
      <NavbarBs/>
      <ItemListContainer saludo = 'BIENVENIDOS AL MUNDO DE TUS MASCOTAS' />
      <TituloHome />
      <CardHome/>
      <Footer/>
    </>
  )
}

export default App
