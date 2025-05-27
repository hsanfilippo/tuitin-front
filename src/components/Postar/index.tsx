import { useState } from 'react'
import {
  Actions,
  Container,
  Avatar,
  InputArea,
  PostButton,
  Textarea
} from './styles'

import { usePostNewPostMutation, useGetPostsQuery } from '../../services/api'

type Props = {
  avatarUrl: string
}

const Postar = ({ avatarUrl }: Props) => {
  const [text, setText] = useState('')
  const { refetch } = useGetPostsQuery()
  const [newPost] = usePostNewPostMutation()

  const handlePost = async () => {
    if (!text.trim()) return
    try {
      await newPost({ content: text }).unwrap()
      setText('')
    } catch (err) {
      console.error('Erro ao postar:', err)
    }
  }

  return (
    <>
      <Container>
        <Avatar src={avatarUrl} alt="Avatar" />
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
                refetch()
              }}
            >
              Postar
            </PostButton>
          </Actions>
        </InputArea>
      </Container>
    </>
  )
}

export default Postar
