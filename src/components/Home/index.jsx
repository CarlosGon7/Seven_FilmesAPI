import { Fragment, useEffect, useState } from 'react';
import './Home.css';

import Hero from './Hero.jsx'
import { LoadingData, options } from '../../App.jsx';
import { Tvcomponent, LikeComponent } from '../SvgComponents/index.jsx';
import { ErrorMsg } from '../../App.jsx'

export default function Home() {

  const [dados, setDados] = useState(null);
  const [show, setShow] = useState(false)

  const showbanner = () => {
    setShow(!show)
  }

  function getDados() {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
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
            {dados.map((movie, index) => (
              <div onClick={showbanner} key={movie.id} className="movie-card">
                <button className='btn-card' >
                  <img className='img-card' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </button>
                {
                  show && (<div className="img-banner">
                    <article className='content-info'>
                      <span className='titulo'>{movie.original_title}</span>
                      <span className='overview'>{movie.overview}</span>
                      <div className='info'>
                        <span className='release-date'>{movie.release_date}</span>
                        <span className='popularity'>
                          <LikeComponent />
                          {movie.popularity}</span>
                      </div>
                    </article>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                  </div>)
                }

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
    <section className='hero-section'>
      <Hero />

      {dados !== null ? displayDados() : <LoadingData/>}
    </section>
  )
}   