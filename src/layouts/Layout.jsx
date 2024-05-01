import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p>React.js | BookApp Project</p>
            </header>
            {children}
            <footer className={styles.footer}><p>Developed by Atena with ❤️</p></footer>
        </>
    )
}

export default Layout
