import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import LoginCadastro from './pages/LoginCadastro'
import RequireAuth from './components/RequireAuth'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<LoginCadastro />} />
    <Route element={<RequireAuth />}>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil/:username" element={<Perfil />} />
    </Route>
  </Routes>
)

export default Rotas
