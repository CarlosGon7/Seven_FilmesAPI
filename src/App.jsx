import { Link, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'

import NavBar from './components/NavBar';

export const options = {
      method: 'GET',
      headers: {
          accept: 'aplication/json',
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDA3NWNmNDgyMjM1MTI4MTQ2MTNjMjVmZGRkYjk3ZSIsIm5iZiI6MTc3NzMxMTMxMS40MDcsInN1YiI6IjY5ZWY5ZTRmNDk5NTQ4MzVmMjc0NDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YaNclXxLMxuD0KtUXWPEpRnbzpZF3Bp-PSCMbJXcjM'
      }
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
