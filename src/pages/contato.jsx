import { Link } from "react-router-dom";


export default function Contato(){
  return (
    <div className="page">
      <h1>CONTATO</h1>
      <p>Entre em contato por: email@exemplo.com ou (11) 1234-5678</p>
      <div className="page-actions">
        <Link className="page-button" to="/">Página inicial</Link>
        <Link className="page-button" to="/sobre">Sobre mim</Link>
        <Link className="page-button" to="/produtos">Produtos</Link>
        <Link className="page-button" to="/servicos">Serviços</Link>
      </div>
    </div>
  )
}
