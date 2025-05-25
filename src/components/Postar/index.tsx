import { useState } from 'react'
import {
  Actions,
  Container,
  Avatar,
  InputArea,
  PostButton,
  Textarea
} from './styles'

type Props = {
  avatarUrl: string
}

const Postar = ({ avatarUrl }: Props) => {
  const [text, setText] = useState('')

  const handlePost = () => {
    if (!text.trim()) return
    setText('')
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
            <PostButton disabled={!text.trim()} onClick={handlePost}>
              Postar
            </PostButton>
          </Actions>
        </InputArea>
      </Container>
    </>
  )
}

export default Postar
