import { Link } from "react-router-dom";

export default function Produtos() {
  return (
    <div className="page">
      <h1> LISTA DE SERVIÇOS</h1>
      <ul>
        <li>Manutenção de Computadores</li>
        <li>Instalação de Software</li>
        <li>Consultoria em TI</li>
      </ul>
      {/* <div className="page-actions">
        <Link className="page-button" to="/sobre">Sobre mim</Link>
        <Link className="page-button secondary" to="/contato">Contato</Link>
      </div> */}
    </div>
  );
}