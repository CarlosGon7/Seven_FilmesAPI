import { Link, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { options } from '../../App.jsx'
import './Generos.css'
import { loadingData } from '../../App.jsx';
import { FaceError } from '../SvgComponents/index.jsx';

export default function NavGeneros() {
    const [links, setLinks] = useState(null)

    async function getGeneros() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(res => res.json())
            .then(res => setLinks(res.genres))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getGeneros();
    }, [])

    const DisplayNav = () => {
            return (
                <ul>
                    {
                        links.map(link => (
                            <NavLink to={`/generos/gen/${link.id}`} key={link.id}>{link.name}</NavLink>
                        ))
                    }
                </ul>
            )}

    return (
        <>
            <h3 className='title'>Gêneros</h3>
            <nav className="nav-gen">
                {links !== null ? <DisplayNav /> : <FaceError />}
            </nav>
        </>
    )
}