import { Navbar } from './Navbar/components'
import './App.css'
import { Hooks } from './Hooks/Hooks'

const App = () => {

  const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

  return (
    <>
      <Navbar menu={ menu } />
      <Hooks />
    </>
  )
}

export default App
