import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const token = localStorage.getItem('access')

  if (!token) {
    alert('Você precisa estar logado para acessar esta página.')
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default RequireAuth
