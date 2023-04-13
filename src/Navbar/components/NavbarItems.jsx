export const NavbarItems = ({ menu }) => {

    const navbarItemStyle = { padding: '0px 10px' }

    return (
        <div style={ { display: 'flex' } }>
            { menu.map(item =>
                <div
                    key={ item }
                    // className="navbarItemStyle"
                    style={ navbarItemStyle }
                >
                    { item }
                </div>)
            }
        </div>
    )
}