import { NavLink, Link, useParams, Outlet } from "react-router"
import { useEffect, useState } from "react";
import './Generos.css'

import { options } from '../../App.jsx'
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


export function GenFilme() {
    const { id } = useParams();

    const [gen, setGen] = useState();
    const [idGen, setIdGen] = useState(id)

    function getgenres() {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
            .then(genres => genres.json())
            .then(genres => setGen(genres.results))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getgenres();
    }, [idGen])

    console.log("Generos: ", gen)
    return (
        <>
            { gen && (
                <div className="generos-list">
                    {gen.map(generos => (
                        <div key={generos.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${generos.poster_path}`} width={240} alt="" />
                        </div>
                    )
                    )}
                </div>
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
            <section>
                <Outlet />
            </section>
        </>
    )
}