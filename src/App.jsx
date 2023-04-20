import { Navbar } from './Navbar/components'
import { Rutas } from './Global/routes'
import './App.css'
import { Mapeado } from './Mapeado/components/Mapeado'

const App = () => {

  const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

  return (
    <>
      <Navbar menu={ menu } />
      <Rutas />
      <Mapeado />
    </>
  )
}

export default App
