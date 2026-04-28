import { NavLink, Link } from "react-router-dom";
import './Navbar.css'

import { TheMovieDBLogo } from "../SvgComponents";

export default function NavBar() {
    return (
        <>
        <header className="header-container">
            <div className="logo-nav">
                <span>Créditos</span>
                <TheMovieDBLogo />
            </div>
            <nav className="nav">
                <NavLink to="/"><span className="spanlink">Inicio</span></NavLink>
                <NavLink to="/filmes"><span className="spanlink">Filmes</span></NavLink>
                <NavLink to="/series"><span className="spanlink">Séries</span></NavLink>
                <NavLink to="/generos"><span className="spanlink">Gêneros</span></NavLink>
                <NavLink to="/minhalista"><span className="spanlink">Minha Lista</span></NavLink> 
            </nav>
            <div className="profile">
                <span>Perfil</span>
            </div>
        </header>
        </>
    )
}