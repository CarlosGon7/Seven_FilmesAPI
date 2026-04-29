import { NavLink, Link } from "react-router-dom"
import { FaceError } from "../SvgComponents"

import './error.css'

export default function ErrorPage() {
  return (
    <>
    <div className="error-page">
      <FaceError width={200} height={200}/>

      <span className="error-span">Ops! Página não encontrada.</span>

      <Link className={'nav-error'} to="/">Página Inicial</Link>
    </div>
    </>
  )
}