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
  margin-right: 24px;
`

export const StockAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 24px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cores.azulClaro};
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
  font-size: 24px;
  margin: 0 16px;
`

export const Text = styled.p`
  font-size: 15px;
  margin-top: 8px;
`

export const Actions = styled.div`
  max-width: 425px;
  color: ${cores.cinzaClaro};
  font-size: 14px;
  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
  }
`

export const Icons = styled.ul`
  width: 120px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  .isToggle {
    fill: red;
  }
`

export const DeleteContainer = styled.div`
  position: absolute;
  right: 80px;
  cursor: pointer;
`
