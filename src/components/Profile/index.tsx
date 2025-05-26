import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import { usePostFollowMutation } from '../../services/api'

import {
  Avatar,
  Banner,
  Container,
  Content,
  Button,
  Name,
  Username
} from './styles'

type Props = {
  bannerUrl: string
  avatarUrl: string
  name: string
  pageUsername: string
}

const Profile = ({ bannerUrl, avatarUrl, name, pageUsername }: Props) => {
  const { userLogedIn } = useSelector((state: RootReducer) => state.auth)
  const { username } = useParams<{ username: string }>()
  console.log(`Voce esta visitando o perfil de: ${username}`)

  const isOwnProfile = userLogedIn === username

  const [followUser] = usePostFollowMutation()

  const handleFollow = async () => {
    if (!username) return

    try {
      await followUser(username).unwrap()
      alert('Seguido com sucesso!')
    } catch (error) {
      console.error('Erro ao seguir:', error)
      alert('Erro ao seguir o usuário.')
    }
  }

  return (
    <>
      <Container>
        <Banner bannerUrl={bannerUrl}>
          <Avatar src={avatarUrl} alt="Avatar" />
        </Banner>
        <Content>
          {isOwnProfile ? (
            <Button>Editar perfil</Button>
          ) : (
            <Button onClick={handleFollow}>Seguir</Button>
          )}
          <Name>{username}</Name>
          <Username>@{username}</Username>
        </Content>
        <Content>
          <h4>Posts</h4>
        </Content>
      </Container>
    </>
  )
}

export default Profile
