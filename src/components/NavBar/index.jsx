import { NavLink, Link } from "react-router-dom";
import './Navbar.css'

import { TheMovieDBLogo } from "../SvgComponents";

export default function NavBar() {
    return (
        <>
            <header className="header-container">
                <nav className="nav">
                    <NavLink to="/"><span className="spanlink">Inicio</span></NavLink>
                    <NavLink to="/filmes"><span className="spanlink">Filmes</span></NavLink>
                    <NavLink to="/series"><span className="spanlink">Séries</span></NavLink>
                    <NavLink to="/generos"><span className="spanlink">Gêneros</span></NavLink>
                    <NavLink to="/minhalista"><span className="spanlink">Minha Lista</span></NavLink>
                </nav>
                <div className="profile-credito">
                    <span>Créditos</span>
                    <TheMovieDBLogo />
                    <div className="profile">
                        <span>222321</span>
                    </div>
                </div>
            </header>
        </>
    )
}