import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 72px;
  height: 100vh;
  background-color: ${cores.preto};
  color: #fff;
  border-right: 1px solid ${cores.azulClaro};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`

export const Top = styled.div`
  padding: 16px 0;
`

export const Logo = styled.div`
  font-size: 28px;
  cursor: pointer;
  width: 40px;

  img {
    max-width: 100%;
  }

  &:hover {
    color: #1d9bf0;
  }
`

export const Bottom = styled.div`
  padding: 16px 0;

  .icon {
    width: 30px;
    transition: ease 0.4s;

    &:hover {
      scale: 1.1;
      transition: ease 0.4s;
    }
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`
