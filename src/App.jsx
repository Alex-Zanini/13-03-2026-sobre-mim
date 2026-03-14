import './App.css'
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Produtos from "./pages/produtos"
import Servicos from "./pages/servicos"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


function App() {

  return (
    

    
      <BrowserRouter>

        <nav>

          <Link to="/">Home</Link>

          <Link to="/sobre">Sobre</Link>

          <Link to="/contato">Contato</Link>

          <Link to="/produtos">Produtos</Link>

          <Link to="/servicos">Serviços</Link>

        </nav>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/servicos" element={<Servicos/>} />

      </Routes>

    </BrowserRouter>
  )
}
  


export default App
