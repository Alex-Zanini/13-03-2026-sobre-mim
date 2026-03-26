import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>BEM VINDO AO MEU SITE</h1>
      <p>Seja bem-vindo(a)!

        Meu nome é Alex! É um prazer ter você aqui. Esperamos que sua experiência seja incrível!
        Explore, descubra novas possibilidades e aproveite tudo o que preparamos para você.
      </p>

      <div className="page-actions">
        <Link className="page-button" to="/sobre">Sobre mim</Link>
        <Link className="page-button" to="/contato">Contato</Link>
        <Link className="page-button" to="/produtos">Produtos</Link>
        <Link className="page-button" to="/servicos">Serviços</Link>
      </div>

    </div>
  );
}