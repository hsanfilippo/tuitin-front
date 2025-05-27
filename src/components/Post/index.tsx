import { useNavigate } from 'react-router-dom'
import {
  Actions,
  Avatar,
  Container,
  Dot,
  Header,
  Name,
  PostContent,
  Text,
  Username
} from './styles'
import formataHora from '../../utils/formataHora'

type Props = {
  avatarUrl: string
  name: string
  username: string
  content: string
  date: string
}

const Post = ({ avatarUrl, name, username, content, date }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <Avatar src={avatarUrl} alt="Avatar" />
        <PostContent>
          <Header>
            <Name onClick={() => navigate(`/perfil/${username}`)}>{name}</Name>
            <Dot>·</Dot>
            <Username>@{username}</Username>
          </Header>
          <Text>{content}</Text>
          <Actions>
            <small>{formataHora(date)}</small>
          </Actions>
        </PostContent>
      </Container>
    </>
  )
}

export default Post
