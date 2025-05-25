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
  return (
    <>
      <Container>
        <Avatar src={avatarUrl} alt="Avatar" />
        <PostContent>
          <Header>
            <Name>{name}</Name>
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
