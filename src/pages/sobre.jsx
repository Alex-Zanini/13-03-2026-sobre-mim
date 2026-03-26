import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="page">
      <h1>SOBRE MIM</h1>
        <p> Meu nome é Alex e atuo na área de desenvolvimento de sistemas. Sempre tive interesse por tecnologia e por entender
            como as coisas funcionam, o que me levou naturalmente ao mundo da programação.

            Atualmente, dedico meu tempo ao desenvolvimento de soluções digitais, criando e aprimorando sistemas que ajudam a 
            resolver problemas e automatizar processos. Gosto de trabalhar com lógica, estrutura de código e busca constante por
            melhorias nas aplicações que desenvolvo.

            Sou uma pessoa curiosa e sempre estou em busca de aprender novas tecnologias, ferramentas e boas práticas de
            desenvolvimento. Acredito que a área de tecnologia exige atualização constante, e por isso procuro evoluir 
            continuamente tanto no aspecto técnico quanto na forma de pensar e resolver desafios.

            Para mim, programar vai além de escrever código: é transformar ideias em soluções funcionais. Meu objetivo é continuar
            aprimorando minhas habilidades e contribuir com projetos que gerem valor e inovação.
        </p>

        <div className="page-actions">
          <Link className="page-button" to="/">Página inicial</Link>
          <Link className="page-button" to="/contato">Contato</Link>
          <Link className="page-button" to="/produtos">Produtos</Link>
          <Link className="page-button" to="/servicos">Serviços</Link>
        </div>
    </div>
  );
}