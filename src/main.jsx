import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, useParams } from 'react-router';
import { RouterProvider, Link, NavLink } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Contato from './components/Contato/index.jsx'
import About from './components/About/index.jsx'
import { AboutUm, AboutDois } from './components/About/index.jsx'


// Criando o router para a aplicação
// Caminhos routers para cada componente
const router = createBrowserRouter([
  {
    // Rotas aninhadas, dentro de rotas pai através de children - Ex: Contato é filho de App
    path: '/', Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/contato', Component: Contato },
      {
        path: '/sobre', Component: About,
        children: [
          { path: '/sobre/um', Component: AboutUm },
          { path: '/sobre/dois', Component: AboutDois }
        ]
      },
      { path: '/about', Component: Aboute },
      {
        path: '/concerts', Component: ConcertsHome,
        children: [
          { path: 'trending', Component: ConcertsTrending },
          { path: 'city/:city', Component: ConcertsCity }
        ]
      },
      {path: '/auth', Component: AuthLayout, children: [
        { path: 'login', Component: Login},
        { path: 'register', Component: Register}
      ]}
    ],
    errorElement: <ErrorPage />
  }
])

export function AuthLayout() {
  return (
    <div style={{ border: "2px solid #ccc", padding: "20px" }}>
      <h1>Área de Autenticação</h1>
      <nav className='nav'>
        <NavLink to="/auth/login">Login</NavLink> |{" "}
        <NavLink to="/auth/register">Registro</NavLink>
      </nav>
      <hr />
      {/* O Outlet renderiza o Login ou o Register aqui dentro */}
      <Outlet />
    </div>
  );
}

export function ErrorPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>Ops! A página que você está procurando não existe.</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export function ConcertsHome() {
  return (
    <>
      <h2>Todos os Concertos (Home de Concertos)</h2>
      <nav className='nav'>
        <NavLink to="/concerts/trending">Trending</NavLink>
        <NavLink to="/concerts/city/sud mennucci">Cidade</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export function ConcertsTrending() {
  return <h2>Concertos em Alta (Trending)</h2>;
}

export function ConcertsCity() {
  const { city } = useParams(); // Pega o ":city" da URL
  return (
    <>
      <h2>Concertos em: {city.toUpperCase()}</h2>
    </>
  );
}

export function Home() {
  return <h1>🏠 Home Page</h1>;
}

export function Aboute() {
  return <h1>ℹ️ Sobre Nós</h1>;
}

export function Login() {
  return <h2>🔑 Página de Login</h2>;
}

export function Register() {
  return <h2>📝 Página de Registro</h2>;
}


// Renderizando o roteador na aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
