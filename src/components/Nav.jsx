import React from 'react'
import {NavLink} from "react-router-dom"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Weather APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to="/About" className="nav-link" >About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
