import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout } from '../../utils/auth'
// import { clearUserLogedIn } from '../../store/reducers/auth'

import { Avatar, Bottom, Container, Logo, Top } from './styles'
import dockerLogo from '../../assets/images/docker_logo.png'
import logoutIcon from '../../assets/images/logout_vector.svg'
import { RootReducer } from '../../store'

type Props = {
  avatarUrl: string
}

const Sidebar = ({ avatarUrl }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const { userLogedIn } = useSelector((state: RootReducer) => state.auth)
  const userLogedIn = localStorage.getItem('userLogedIn')

  return (
    <Container>
      <Top>
        <Logo onClick={() => navigate('/home')}>
          <img src={dockerLogo} alt="Logo" title="Ir para home" />
        </Logo>
      </Top>
      <Bottom>
        <Logo>
          <img
            src={logoutIcon}
            alt="Logout icon"
            title="Sair"
            className="icon"
            onClick={() => {
              logout()
              navigate('/')
              localStorage.removeItem('userLogedIn')
            }}
          />
        </Logo>
        <Avatar
          src={avatarUrl}
          alt="Avatar"
          title="Meu perfil"
          onClick={() => navigate(`/perfil/${userLogedIn}`)}
        />
      </Bottom>
    </Container>
  )
}

export default Sidebar
