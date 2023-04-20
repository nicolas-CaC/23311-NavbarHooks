import { Navbar } from './Navbar/components'
import { Rutas } from './Global/routes'
import './App.css'
import { Mapeado } from './Mapeado/components/Mapeado'
import { OtroMapeado } from './Mapeado/components/OtroMapeado'

const App = () => {

  const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

  return (
    <>
      <Navbar menu={ menu } />
      <Rutas />
      <Mapeado />
      <OtroMapeado />
    </>
  )
}

export default App
