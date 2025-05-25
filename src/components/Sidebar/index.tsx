import { useNavigate } from 'react-router-dom'
import { Avatar, Bottom, Container, Logo, Top } from './styles'
import dockerLogo from '../../assets/images/docker_logo.png'
import logoutIcon from '../../assets/images/logout_vector.svg'

type Props = {
  avatarUrl: string
}

const Sidebar = ({ avatarUrl }: Props) => {
  const navigate = useNavigate()
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
            onClick={() => navigate('/')}
          />
        </Logo>
        <Avatar
          src={avatarUrl}
          alt="Avatar"
          title="Meu perfil"
          onClick={() => navigate('/perfil/1')}
        />
      </Bottom>
    </Container>
  )
}

export default Sidebar
