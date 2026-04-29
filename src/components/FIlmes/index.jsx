import { NavLink, Link, useParams, Outlet } from "react-router"
import { useEffect, useState } from "react";

import { options } from "../../App";
import { LoadingData } from "../../App";
import './filmes.css'

// Um fetch pra cada tipo de lista
// Um useState pra cada requisição
// Tocando agora
// Popular
// Mais bem avaliado
// Por vir

export default function Filmes() {

  // Um useState pra cada requisição
  const [anime, setAnimate] = useState([]);
  const [medo, setMedo] = useState([]);
  const [acao, setAcao] = useState([]);
  const [comedia, setComedia] = useState([])

  // Uma função para cadas requisição
  // Um fetch pra cada tipo de lista

  function getAcao() {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28%2C80%2C18', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Playing: ", data);
        setAcao(data.results)
      })
      .catch(err => console.error("Error to Acao: ", err));
  }

  function getAnimate() {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28%2C12%2C16', options)
      .then(response => response.json())
      .then(data => setAnimate(data.results))
      .catch(err => console.error("Error to Animate: ", err));
  }

  function getMedo() {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=27%2C18', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Rating: ", data);
        setMedo(data.results);
      })
      .catch(err => console.error("Error to Medo", err));
  }

  function getComedia() {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35%2C10751%2C14&without_genres=16', options)
      .then(response => response.json())
      .then(data => {
        // console.log("Coming: ", data);
        setComedia(data.results)
      })
      .catch(err => console.error("Error to Comédia: ", err));
  }

  useEffect(() => {
    getAnimate();
    getMedo();
    getAcao();
    getComedia();
  }, [])

  console.log(anime)

  return (
    <>
      <div className="filmes-container">
        <section className="animate-section">
          <h1 className="titulo">Animações</h1>
          <div className="container-list">
            {
              anime.map(anime => (
                <div className="anime-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} width={200} alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="medo-section">
          <h1 className="titulo">Suspense & Terror</h1>
          <div className="container-list">
            {
              medo.map(horror => (
                <div className="medo-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${horror.poster_path}`}  alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="acao-section">
          <h1 className="titulo">Ação e Suspense</h1>
          <div className="container-list">
            {
              acao.map(act => (
                <div className="acao-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${act.poster_path}`} width={200} alt="" />
                </div>
              ))
            }
          </div>
        </section>

        <section className="comedia-section">
          <h1 className="titulo">Comédias em Familia</h1>
          <div className="container-list">
            {
              comedia.map(comed => (
                <div className="comedia-card f-card">
                  <img className="img-card" src={`https://image.tmdb.org/t/p/w500${comed.poster_path}`} width={200} alt="" />=
                </div>
              ))
            }
          </div>
        </section>

      </div>
    </>
  )
}