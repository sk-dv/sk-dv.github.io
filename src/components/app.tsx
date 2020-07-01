/** Tools */
import React from "react"
/** Styles */
import "../sass/bulma-config.scss"

function App() {
    return (
        <>
            <nav className="navbar is-spaced is-fixed-top is-primary" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <p className="is-bold">sk dv.</p>
                        </a>
                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                        </a>
                    </div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-start">
                            <a href="#" className="navbar-item">proyectos</a>
                            <a href="#" className="navbar-item">blog</a>
                        </div>
                        <div className="navbar-end">
                            <a href="https://www.linkedin.com/in/felipeosornio/" target="_blank" className="navbar-item">
                                <span className="icon">
                                    <i className="fa fa-linkedin"/>
                                </span>
                            </a>
                            <a href="https://github.com/FelipeOsornio" target="_blank" className="navbar-item">
                                <span className="icon">
                                    <i className="fa fa-github"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default App
