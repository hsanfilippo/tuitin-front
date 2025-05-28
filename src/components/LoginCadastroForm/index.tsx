import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  usePostAuthMutation,
  usePostRegisterMutation
} from '../../services/api'

import { Logo, Button, Card, Container, Input, Title, Toggle } from './styles'
import logoDocker from '../../assets/images/docker_logo.png'

const LoginCadastroForm = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const [authenticate] = usePostAuthMutation()
  const [register] = usePostRegisterMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup) {
      const registerPayload = {
        email: email,
        username: username,
        password: password
      }

      try {
        const response = await register(registerPayload).unwrap()
        // console.log(response)

        setEmail('')
        setUsername('')
        setPassword('')
        setIsSignup(false)
        alert('Cadastro realizado!')
      } catch (error) {
        alert('Dados do formulário incorretos. Tente novamente.')
      }
    } else {
      const loginPayload = {
        username: username,
        password: password
      }

      try {
        const response = await authenticate(loginPayload).unwrap()
        // console.log(response)
        localStorage.setItem('access', response.access)
        localStorage.setItem('refresh', response.refresh)

        // GET em /api/me para armazenar o username logado no momento,
        // apenas se o login for autenticado corretamente (existir o access).
        const responseMe = await fetch('http://localhost:8000/api/me/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
          }
        })
        const dataMe = await responseMe.json()
        localStorage.setItem('userLogedIn', dataMe.username)
        // console.log(localStorage.getItem('access'))
        // console.log(localStorage.getItem('refresh'))

        setUsername('')
        setPassword('')
        navigate('/home')
      } catch (error) {
        alert('Usuário ou senha inválidos, tente novamente.')
      }
    }
  }

  // // Debug:
  // const userLogedIn = localStorage.getItem('userLogedIn')
  // useEffect(() => {
  //   console.log(`Usuário logado: ${userLogedIn}`)
  // }, [userLogedIn])

  return (
    <Container>
      <Card>
        <div>
          <Logo src={logoDocker} alt="Tava esperando um passarinho, né?" />
        </div>
        <Title>{isSignup ? 'Criar conta' : 'Entrar'}</Title>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <Input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignup ? (
            <Button type="submit" onClick={handleSubmit}>
              Cadastrar
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit}>
              Entrar
            </Button>
          )}
        </form>
        <Toggle onClick={() => setIsSignup((prev) => !prev)}>
          {isSignup
            ? 'Já tem uma conta? Entrar'
            : 'Não tem uma conta? Cadastrar-se'}
        </Toggle>
      </Card>
    </Container>
  )
}

export default LoginCadastroForm
