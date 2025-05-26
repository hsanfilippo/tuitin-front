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
            <Name onClick={() => navigate(`/perfil/${username}`)}>
              {username}
            </Name>
            <Username>@{username}</Username>
            <Dot>·</Dot>
            <Username>{date}</Username>
          </Header>
          <Text>{content}</Text>
          <Actions></Actions>
        </PostContent>
      </Container>
    </>
  )
}

export default Post
