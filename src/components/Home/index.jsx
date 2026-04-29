import { Fragment, useEffect, useState } from 'react';
import './Home.css';

import { options } from '../../App.jsx';
import { Tvcomponent } from '../SvgComponents/index.jsx';
import { ErrorMsg } from '../../App.jsx'
import { loadingData } from '../../App.jsx';

export default function Home() {

    const [dados, setDados] = useState([]);

    function getDados() {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(data => setDados(data.results))
            .catch(error => console.error('Erro ao buscar dados:', error))
    }

    useEffect(() => {
        getDados()
    }, [])
    
    console.log(dados)
    
    function displayDados() {
        if (dados !== null) {
            return (
                <>
                    <section className="movie-list">
                        {dados.map(movie => (
                            <div key={movie.id} className="movie-card">
                                <img className='img-card' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} alt={movie.title} />


                                <article >
                                    <div>
                                        <span>{movie.original_title}</span><br />
                                        <span>{movie.overview}</span><br />
                                        <span>{movie.release_date}</span><br />
                                        <span>{movie.popularity}</span><br />
                                    </div>
                                    <img className='img-banner' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={600} alt="" />
                                </article>
                            </div>
                        ))}
                    </section>
                </>
            )
        } else {
            return <ErrorMsg />
        }

    }

    return (
        <>
            {dados !== undefined ? displayDados() : loadingData()}
        </>
    )
}   