import { Navigate, Route, Routes } from "react-router-dom"
import { Hooks } from "../../Hooks/components"
import { Productos } from "../components/Productos"
import { Nosotros } from "../components/Nosotros"
import { Contacto } from "../components/Contacto"



export const Rutas = () => {

    return (
        <Routes>
            <Route path='/' element={ <Hooks /> } />
            <Route path='/productos' element={ <Productos /> } />
            <Route path='/nosotros' element={ <Nosotros /> } />
            <Route path='/contacto' element={ <Contacto /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}