import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import LoginCadastro from './pages/LoginCadastro'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<LoginCadastro />} />
    <Route path="/home" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
