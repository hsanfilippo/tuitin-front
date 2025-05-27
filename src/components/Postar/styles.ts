import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  padding: 24px 24px 24px 88px;
  border-bottom: 1px solid #2f3336;
  background-color: ${cores.preto};
  color: #fff;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`

export const StockAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cores.azulClaro};
`

export const InputArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Textarea = styled.textarea`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  resize: none;
  outline: none;
  min-height: 80px;
  margin-bottom: 8px;
  padding: 16px 64px 16px 16px;

  &::placeholder {
    color: #71767b;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PostButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) =>
    props.disabled ? cores.cinza : cores.azulClaro};
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#2f3336' : '#1a8cd8')};
  }
`
