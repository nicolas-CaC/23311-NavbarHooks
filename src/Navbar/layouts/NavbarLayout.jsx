export const NavbarLayout = ({ children }) => {

    const style = {
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <div style={ style }>
            { children }
        </div>
    )
}