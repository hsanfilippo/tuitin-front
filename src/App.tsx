import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
