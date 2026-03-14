import { Link } from "react-router-dom";

export default function Produtos() {
  return (
    <div className="page">
      <h1> LISTA DE PRODUTOS</h1>
      <ul>
        <li>PC</li>
        <li>Notebook</li>
        <li>Tablet</li>
      </ul>
      {/* <div className="page-actions">
        <Link className="page-button" to="/sobre">Sobre mim</Link>
        <Link className="page-button secondary" to="/contato">Contato</Link>
      </div> */}
    </div>
  );
}