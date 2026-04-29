import { Link, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'

import NavBar from './components/NavBar';
import { Tvcomponent } from './components/SvgComponents';

export const options = {
  method: 'GET',
  headers: {
    accept: 'aplication/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDA3NWNmNDgyMjM1MTI4MTQ2MTNjMjVmZGRkYjk3ZSIsIm5iZiI6MTc3NzMxMTMxMS40MDcsInN1YiI6IjY5ZWY5ZTRmNDk5NTQ4MzVmMjc0NDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YaNclXxLMxuD0KtUXWPEpRnbzpZF3Bp-PSCMbJXcjM'
  }
}

export function ErrorMsg() {
  return (
    <>
      <div className="error-msg">
        <Tvcomponent />
        <h1>Nao foi encontrado nenhum filme! :/</h1>
      </div>

    </>
  )
}

export function loadingData(){
        return(
            <>
                <div className='loader'>
                    <div className='loading'>
                    </div>
                </div>
            </>
        )
    }

function App() {
  return (
    <>
      <NavBar />
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  )
}

export default App
