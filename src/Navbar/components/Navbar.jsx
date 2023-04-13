import { NavbarItems, NavbarLogo, NavbarSearch } from "./"
import { NavbarLayout } from "../layouts"

export const Navbar = (props) => {

    return (
        <NavbarLayout>
            <NavbarLogo />
            <NavbarItems { ...props } />
            <NavbarSearch />
        </NavbarLayout>
    )
}



