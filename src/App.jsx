import { Navbar } from './Navbar/components'
import { Rutas } from './Global/routes'
import './App.css'

const App = () => {

  const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

  return (
    <>
      <Navbar menu={ menu } />
      <Rutas />
    </>
  )
}

export default App
