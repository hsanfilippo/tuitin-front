import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  padding: 24px 24px 24px 88px;
  border-bottom: 1px solid ${cores.cinza};
  background-color: ${cores.pretoClaro};
  color: #fff;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`

export const PostContent = styled.div`
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
`

export const Name = styled.span`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${cores.azulClaro};
  }
`

export const Username = styled.span`
  color: ${cores.cinzaClaro};
`

export const Dot = styled.span`
  color: ${cores.azulClaro};
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 15px;
  margin: 4px 0 12px 0;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 425px;
  color: #71767b;
  font-size: 14px;

  svg {
    cursor: pointer;

    &:hover {
      color: ${cores.azulClaro};
    }
  }
`
