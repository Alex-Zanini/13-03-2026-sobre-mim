import './App.css'
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


function App() {

  return (
    

    
      <BrowserRouter>

        <nav>

          <Link to="/">Home</Link>

          <Link to="/sobre">Sobre</Link>

          <Link to="/contato">Contato</Link>

        </nav>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />

      </Routes>

    </BrowserRouter>
  )
}
  


export default App
