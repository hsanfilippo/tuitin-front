import { useNavigate } from 'react-router-dom'
import {
  Actions,
  Avatar,
  Container,
  DeleteContainer,
  Dot,
  Header,
  Icons,
  Name,
  PostContent,
  StockAvatar,
  Text,
  Username
} from './styles'
import formataHora from '../../utils/formataHora'

import { ReactComponent as LikeIcon } from '../../assets/images/like_icon.svg'
import { ReactComponent as CommentIcon } from '../../assets/images/comment_icon.svg'
import { ReactComponent as ShareIcon } from '../../assets/images/share_icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/images/delete_icon.svg'

import { useDeletePostMutation, useGetPostsQuery } from '../../services/api'

type Props = {
  avatarUrl: string
  name: string
  username: string
  content: string
  date: string
  id: string
}

const Post = ({ avatarUrl, name, username, content, date, id }: Props) => {
  const navigate = useNavigate()
  const userLogedIn = localStorage.getItem('userLogedIn')
  const [deletePost] = useDeletePostMutation()
  const { refetch } = useGetPostsQuery()

  const handleDelete = async (postId: string) => {
    await deletePost(postId)
    await refetch()
  }

  return (
    <>
      <Container>
        {avatarUrl === '' ? (
          <StockAvatar>{username.charAt(0).toUpperCase()}</StockAvatar>
        ) : (
          <Avatar src={avatarUrl} alt="Avatar" />
        )}
        <PostContent>
          <Header>
            {name === '' ? (
              <Name onClick={() => navigate(`/perfil/${username}`)}>
                {username}
              </Name>
            ) : (
              <Name onClick={() => navigate(`/perfil/${username}`)}>
                {name}
              </Name>
            )}
            <Username>@{username}</Username>
          </Header>
          <Text>{content}</Text>
          <Actions>
            <div>
              <div>
                <Icons>
                  <li>
                    <LikeIcon className="" />
                  </li>
                  <li>
                    <CommentIcon />
                  </li>
                  <li>
                    <ShareIcon />
                  </li>
                </Icons>
              </div>
              <Dot>·</Dot>
              <small>{formataHora(date)}</small>
              <DeleteContainer>
                {username === userLogedIn && (
                  <span>
                    <DeleteIcon onClick={() => handleDelete(id)} />
                  </span>
                )}
              </DeleteContainer>
            </div>
          </Actions>
        </PostContent>
      </Container>
    </>
  )
}

export default Post
