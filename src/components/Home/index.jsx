import { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {

    const [dados, setDados] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'aplication/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDA3NWNmNDgyMjM1MTI4MTQ2MTNjMjVmZGRkYjk3ZSIsIm5iZiI6MTc3NzMxMTMxMS40MDcsInN1YiI6IjY5ZWY5ZTRmNDk5NTQ4MzVmMjc0NDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YaNclXxLMxuD0KtUXWPEpRnbzpZF3Bp-PSCMbJXcjM'
        }
    }

    function getDados() {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(data => setDados(data.results))
            .catch(error => console.error('Erro ao buscar dados:', error))
    }

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
                    )
                    )}

                </div>
            )}
        </>
    )
}   