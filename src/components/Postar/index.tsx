import { useState } from 'react'
import {
  Actions,
  Container,
  Avatar,
  InputArea,
  PostButton,
  Textarea,
  StockAvatar
} from './styles'

import {
  usePostNewPostMutation,
  useGetPostsQuery,
  useGetUserDataQuery
} from '../../services/api'

const Postar = () => {
  const username = localStorage.getItem('userLogedIn')
  const [text, setText] = useState('')
  const { refetch } = useGetPostsQuery()
  const { data: userData } = useGetUserDataQuery(username!)
  const [newPost] = usePostNewPostMutation()

  const handlePost = async () => {
    if (!text.trim()) return
    try {
      await newPost({ content: text }).unwrap()
      setText('')
      refetch()
    } catch (err) {
      console.error('Erro ao postar:', err)
    }
  }

  return (
    <>
      {userData ? (
        <Container>
          {userData.profile?.avatar === '' ? (
            <StockAvatar>
              {userData.username?.charAt(0).toUpperCase()}
            </StockAvatar>
          ) : (
            <Avatar src={`${userData.profile?.avatar}`} />
          )}
          <InputArea>
            <Textarea
              placeholder="O que está acontecendo?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Actions>
              <PostButton
                disabled={!text.trim()}
                onClick={() => {
                  handlePost()
                }}
              >
                Postar
              </PostButton>
            </Actions>
          </InputArea>
        </Container>
      ) : (
        <h3>Carregando...</h3>
      )}
    </>
  )
}

export default Postar
