/** Tools */
import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Blog from "./blog"
import Main from "./main"
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                        </a>
                    </div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-start">
                            <a href="/" className="navbar-item">Proyectos</a>
                            <a href="/blogs" className="navbar-item">Blog</a>
                        </div>
                        <div className="navbar-end">
                            <a href="https://github.com/FelipeOsornio" rel="noopener noreferrer" target="_blank" className="navbar-item">
                                <span className="icon">
                                    <i className="fab fa-github"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <BrowserRouter>
                <Route path="/" component={Main}/>
                <Route path="/blogs" component={Blog}/>
            </BrowserRouter>
            <footer className="footer is-pinned-bottom">
                <div className="content has-text-centered">
                    <div className="is-inline">
                        <ul className="list-tools-formated">
                            <li>
                                Desarrollado por Felipe Osornio (sk dv).
                            </li>
                            <li>
                                Marco CSS por <a href="https://bulma.io" className="is-tool" title="Bulma" target="_blank"
                                                 rel="noopener noreferrer">Bulma</a>.
                            </li>
                            <li>
                                Iconos por&nbsp;
                                <a className="is-tool" href="https://www.flaticon.es/autores/freepik" title="Freepik" rel="noopener noreferrer"
                                   target="_blank">Freepik</a> de&nbsp;
                                <a className="is-tool" href="https://www.flaticon.es/" title="Flaticon" target="_blank" rel="noopener noreferrer">
                                    Flaticon
                                </a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
