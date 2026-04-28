import { Link, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { options } from '../../App.jsx'
import './Generos.css'



export default function NavGeneros(){

    const [links, setLinks] = useState()

    async function getGeneros() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(res => res.json())
            .then(res => setLinks(res.genres))
            .catch(err => console.error(err));
    }

     useEffect(()=>{
         getGeneros();
     }, [])

     console.log("Links: ", links)

     function navlinks(){
        if(links){
            links.map(link => { 
            })
        }
     }
    return (
        <>
        <h3 className='title'>Gêneros</h3>
        <nav className="nav-gen">
        {links && (
            <ul>
                {
                    links.map(link => (
                            <NavLink key={link.id}>{link.name}</NavLink>
                    ))
                }
            </ul>
        )}    
        </nav>
        </>
    )
}