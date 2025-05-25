import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  preto: '#0a0a0a',
  pretoClaro: '#151515',
  cinza: '#2f3336',
  cinzaClaro: '#71767b',
  azulClaro: '#1d9bf0',
  azulClaroSub: '#1a8cd8'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    body {
      background-color: ${cores.preto};
    }
  }
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
