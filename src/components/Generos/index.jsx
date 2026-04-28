import { NavLink, Link, useParams, Outlet } from "react-router"
import { useEffect } from "react";
import './Generos.css'

import { options } from '../../App.jsx'
import NavGeneros from "./NavGeneros.jsx"

export default function Generos() {



    return (
        <>
            <h1>Pagina de Generos</h1>
            <aside className="aside-container">
                <div className="aside-content">
                    <NavGeneros />
                </div>
            </aside>
            <section>
                <Outlet />
            </section>
        </>
    )
}