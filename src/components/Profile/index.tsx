import {
  Avatar,
  Banner,
  Container,
  Content,
  EditButton,
  Name,
  Username
} from './styles'

type Props = {
  bannerUrl: string
  avatarUrl: string
  name: string
  username: string
}

const Profile = ({ bannerUrl, avatarUrl, name, username }: Props) => {
  return (
    <>
      <Container>
        <Banner bannerUrl={bannerUrl}>
          <Avatar src={avatarUrl} alt="Avatar" />
        </Banner>
        <Content>
          <EditButton>Editar perfil</EditButton>
          <Name>{name}</Name>
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
