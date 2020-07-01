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
            <div>
                <p>
                    No me pregunten porqué me puse SkDv, simplemente me gusta. Como una tatuaje bonito que ves y te quieres hacer, no hay un motivo
                    oculto, mera trivialidad.

                    Me gustan los pinos. Siempre que pienso en uno recuerdo lo fresco y tétrico que se siente estar en un bosque, sin embargo la
                    sensación
                    me parece agradable.

                    Decidí desarrollar esta página porque quería combinar las habilidades que he ido adquiriendo a lo largo de mi vida; es corta, aún
                    así
                    considero que de alguna manera puedo aportar algo interesante al mundo.

                    Me gustaría presentarme como Deiv, mi nombre no me gusta, por lo tanto no lo diré. Soy estudiante de Ingeniería en Sistema
                    Computacionales, dentro de un par de meses terminaré la carrera.
                </p>
            </div>
        </>
    )
}

export default App
