import React , {useState} from "react"
import profileImage from "../images/perfil.png";

export default function Main() {

    const [userSpanClass, setUserSpanClass] = useState("")
    const [nameSpanClass, setNameSpanClass] = useState("")

    const toggleNameUser = () => {
        setUserSpanClass("show-it")
        setNameSpanClass("hide-it")
    }

    const toggleUserName = () => {
        setUserSpanClass("hide-it")
        setNameSpanClass("show-it")
    }

    return (
        <>
            <div className="container">
                <div className="is-vcentered has-margin">
                    <img id="profile-image-wrapper" src={profileImage} alt="imagen de perfil"/>
                    <div>
                        <div className="has-margin-bottom">
                            <p className="title is-4">
                                <span id="user-wrapper" className={userSpanClass} onMouseLeave={toggleUserName}>Deiv (sk dv.)</span>
                                <span id="name-wrapper" className={nameSpanClass} onMouseOver={toggleNameUser}>Felipe Osornio</span>
                            </p>
                        </div>
                        <div>
                            <p className="subtitle is-6 has-text-white">
                                Memento mori
                            </p>
                        </div>
                    </div>
                </div>
                <div className="main-div has-background-primary has-text-white">
                    <ul className="main-list">
                        <li>
                            Soy desarrollador de software. Le tengo mucho interés porque considero que es una herramienta bastante útil en estos
                            tiempos. Te permite construir cosas que puedan provenir de tu imaginación, cualquier cosa (de cierta manera) puede ser
                            emulada, ya sea para bien o para mal.
                        </li>
                        <li>
                            Tengo diferentes intereses por la música y la literatura. No me gusta encacillar mis gusto musicales en géneros, prefiro
                            que fluya y ya después decidir si realmente me gusto o no. En cuanto a literatura, me agrada el pensamiento filósofico y
                            como se relaciona con algunos aspectos psicológicos y sociales.
                        </li>
                        <li>
                            He realizado diferentes proyectos a lo largo de mi vida profesional y estudiantil, los pueden encontrar en la sección de
                            proyectos.
                            Mientras que en la sección de blogs hay diferentes escritos que he realizado sobre algunas ideas que he generado al leer algunos
                            casos o por mera observación.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}