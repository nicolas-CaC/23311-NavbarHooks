import { Link } from "react-router-dom"

export const NavbarItems = ({ menu }) => {

    // const navbarItemStyle = { padding: '0px 10px' }

    return (
        <div style={ { display: 'flex', gap: '15px' } }>
            {/* { menu.map(item =>
                <Link
                    key={ item }
                    style={ navbarItemStyle }
                    to='/'
                >
                    { item }
                </Link>)
            } */}
            <Link to='/'>Inicio</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/contacto'>Contacto</Link>
        </div>
    )
}