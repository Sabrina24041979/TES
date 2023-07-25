import logo from '../jaguarlogo.png'
import {
    Link
} from "react-router-dom";

import './Header.css';

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary p-0">
                <div className="container-fluid nav-bg-color">
                    <Link className="navbar-brand m-3" to="/"><img src={logo} alt="Logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item m-3">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to="/about" className="nav-link">Galerie</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to="/portfolio" className="nav-link">Contact</Link>
                        </li>                        
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;