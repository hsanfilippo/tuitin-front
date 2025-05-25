import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${cores.pretoClaro};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 200px;
`

export const Card = styled.div`
  background-color: ${cores.preto};
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(29, 155, 240, 0.2);

  > div {
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
  }
`

export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${cores.pretoClaro};
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #71767b;
  }

  &:focus {
    outline: 2px solid #1d9bf0;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${cores.azulClaro};
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${cores.azulClaroSub};
  }
`

export const Toggle = styled.p`
  margin-top: 16px;
  text-align: center;
  color: ${cores.cinzaClaro};
  cursor: pointer;

  &:hover {
    color: ${cores.azulClaroSub};
  }
`
