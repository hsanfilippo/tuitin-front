import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { GlobalCss } from './styles'
import { store } from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
