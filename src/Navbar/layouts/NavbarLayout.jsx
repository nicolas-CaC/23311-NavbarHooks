export const NavbarLayout = ({ children }) => {

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <div style={ style }>
            { children }
        </div>
    )
}