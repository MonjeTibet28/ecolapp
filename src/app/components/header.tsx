import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

function Header() {
    return (
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                        <img className="logo" src="images/logoTitulo.png" alt="EcolApp Logo" style={{ width: '18%' }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li><NavLink className="nav-link" to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink className="nav-link" to="/servicio">Servicio</NavLink></li>
                        <li><NavLink className="nav-link" to="/contactar">Contactanos</NavLink></li>
                        <li><NavLink className="nav-link" to="/peticion">Contratar</NavLink></li>
                    </ul>
                    {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><NavLink className="nav-link" to="/peticion"><img src="images/user.svg"/></NavLink></li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
}

export default Header;