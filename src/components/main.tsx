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
                                Estudiante de Ingeniería en Sistemas Computacionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}