import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 16px;
`

export const Modal = styled.div`
  background: ${cores.pretoClaro};
  padding: 24px;
  border-radius: 8px;
  color: white;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 36px;
  }
`

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;

  label {
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 24px;
    height: 36px;
    padding: 0 8px;
    border-radius: 16px;
    border: 2px solid ${cores.cinza};
    background-color: ${cores.preto};
    color: #fff;
    text-align: center;
  }

  textarea {
    margin-bottom: 24px;
    height: 80px;
    padding: 8px;
    border-radius: 16px;
    border: 2px solid ${cores.azulClaro};
    resize: none;
    border: 2px solid ${cores.cinza};
    background-color: ${cores.preto};
    color: #fff;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 110px;
    height: 30px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 16px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: ${cores.cinza};
    }
  }
`
