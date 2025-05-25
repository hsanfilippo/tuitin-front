import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
