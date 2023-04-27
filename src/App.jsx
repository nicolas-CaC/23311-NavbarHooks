import { OtroMapeado } from './Mapeado/components/OtroMapeado'
import { Mapeado } from './Mapeado/components/Mapeado'
import { HooksProvider } from './Hooks/context'
import { Navbar } from './Navbar/components'
import { Rutas } from './Global/routes'
import './App.css'


const App = () => {

  const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

  return (
    <HooksProvider>
      <Navbar menu={ menu } />
      <Rutas />
      <Mapeado />
      <OtroMapeado />
    </HooksProvider>
  )
}

export default App
