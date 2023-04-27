export const HooksLayout = ({ children }) => {

    const style = {
        margin: '2em 0em',
        // height: '80vh',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        flexDirection: 'column',
        gap: 20,
        boxSizing: 'content-box'
    }

    return (
        <div style={ style }>{ children }</div>
    )
}