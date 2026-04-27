import { NavLink, Outlet } from 'react-router-dom';

export function AboutUm(){
    return(
        <>
        <h1>Sobre Primeiro</h1>
        </>
    )
}

export function AboutDois(){
    return(
        <>
        <h1>Sobre segundo</h1>
        </>
    )
}

export default function About() {
    return(
        <>
        <h1>Sobre</h1>
        <nav className='nav'>
        <NavLink to="/sobre/um">Sobre Um</NavLink>
        <NavLink to="/sobre/dois">Sobre Dois</NavLink>
        </nav>
        <Outlet />
        </>
    )
}