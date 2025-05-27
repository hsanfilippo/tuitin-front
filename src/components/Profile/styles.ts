import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.preto};
  color: #fff;
  width: 100%;
`

export const Banner = styled.div<{ bannerUrl: string }>`
  max-width: 100%;
  height: 200px;
  background-color: ${cores.cinzaClaro};
  background-image: url(${(props) => props.bannerUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 60px;
  margin-left: 72px;

  .no-image {
    max-width: 100%;
    height: 200px;
    background-image: none;
    position: relative;
    margin-bottom: 60px;
    margin-left: 72px;
  }
`
export const StockBanner = styled.div``

export const Avatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 4px solid ${cores.azulClaro};
  position: absolute;
  bottom: -65px;
  left: 16px;
  background-color: ${cores.preto};
`

export const StockAvatar = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 4px solid ${cores.azulClaro};
  position: absolute;
  bottom: -65px;
  left: 16px;
  background-color: ${cores.azulClaroSub};
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  border-bottom: 1px solid ${cores.cinza};
  margin-left: 72px;

  h4 {
    width: 45px;
  }
`

export const Name = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
`

export const Username = styled.span`
  color: ${cores.cinzaClaro};
  font-size: 16px;
`

export const Button = styled.button`
  position: absolute;
  top: -32px;
  right: 16px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid #71767b;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
  }
`
