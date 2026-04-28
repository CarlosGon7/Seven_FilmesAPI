import { useEffect, useState } from 'react';
import './Home.css';

import { options } from '../../App.jsx';
import { Tvcomponent } from '../SvgComponents/index.jsx';
import { ErrorMsg } from '../../App.jsx'

export default function Home() {

    const [dados, setDados] = useState(null);

    function getDados() {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(data => setDados(data.results))
            .catch(error => console.error('Erro ao buscar dados:', error))
    }

    useEffect(()=>{
        getDados()
    }, [])

    function displayDados() {
        if (dados) {
            return (
                <>
                    <h1>Descobrir</h1>
                    {dados && (
                        <div className="movie-list">
                            {dados.map(movie => (
                                <div key={movie.id} className="movie-card">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={240} alt={movie.title} />
                                    {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={600} alt="" /> */}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )
        } else {
            return <ErrorMsg />
        }
    }

    return (
        <>
            {displayDados()}
        </>
    )
}   