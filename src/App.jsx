import { Link, Outlet, NavLink } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <h1>React App</h1>

      <nav className="nav">
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/contato">Contato</NavLink> |
        <NavLink to="/sobre">Sobre</NavLink> |
        <NavLink to="/about">About</NavLink> |
        <NavLink to="/concerts">Concertos</NavLink> |
        <NavLink to="/auth">Autenticação</NavLink>
      </nav>
      <Outlet />
      <footer>
        <p>&copy; 2023 Minha App. Todos os direitos reservados.</p>
      </footer>
      
    </>
  )
}

export default App
