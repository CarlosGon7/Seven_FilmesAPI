import { NavLink, Link, useParams, Outlet } from "react-router"
import { useEffect, useState } from "react";
import './Generos.css'

import { loadingData, options } from '../../App.jsx'
import NavGeneros from "./NavGeneros.jsx"

// function DisplayGet({db}) {
//     return (
//         <>
//             {db && (
//                 <div className="movie-list">
//                     {db.map(movie => (
//                         <div key={movie.id} className="movie-card">
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={240} alt={movie.title} />
//                             {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={600} alt="" /> */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     )
// }


export function GetGeneroFilme() {
    const { id } = useParams();
    const [gen, setGen] = useState([]);

    function getgenres() {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id ? id : 16}`, options)
            .then(generos => generos.json())
            .then(generos => {
                setGen(generos.results)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getgenres();

    }, [id])


    return (
        <>
            {gen && (
                <section className="generos-container">
                    {gen.map(generos => (
                        <div className="generos-card" key={generos.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${generos.poster_path}`} alt="" />
                        </div>
                    )
                    )}
                </section>
            )}
        </>
    )
}

export default function Generos() {

    return (
        <>
            <aside className="aside-container">
                <div className="aside-content">
                    <NavGeneros />
                </div>
            </aside>
            <Outlet />
        </>
    )
}