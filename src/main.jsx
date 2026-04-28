import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, useParams } from 'react-router';
import { RouterProvider, Link, NavLink } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Filmes from './components/Filmes';
import Series from './components/Series';
import Generos from './components/Generos/index.jsx';
import MinhaLista from './components/MinhaLista';

import { GenFilme } from './components/Generos';

// Criando o router para a aplicação
// Caminhos routers para cada componente
const router = createBrowserRouter([
  {
    // Rotas aninhadas, dentro de rotas pai através de children - Ex: Contato é filho de App
    path: '/', Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/filmes', Component: Filmes
      },
      {
        path: 'series', Component: Series
      },
      {
        path: '/generos', Component: Generos,
        children: [
          {
            path: 'gen/:id', Component: GenFilme
          }
        ]
      },
      {
        path: 'minhalista', Component: MinhaLista
      }
    ],
    errorElement: <ErrorPage />
  }
])


// Renderizando o roteador na aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
