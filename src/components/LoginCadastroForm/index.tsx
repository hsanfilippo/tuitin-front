import { useState } from 'react'
import { Logo, Button, Card, Container, Input, Title, Toggle } from './styles'
import logoDocker from '../../assets/images/docker_logo.png'
import { useNavigate } from 'react-router-dom'

import { usePostAuthMutation } from '../../services/api'

const LoginCadastroForm = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const [authenticate, { isLoading, isError, isSuccess }] =
    usePostAuthMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup) {
      console.log('Cadastrar:', { name, username, password })
    } else {
      const loginPayload = {
        username: username,
        password: password
      }

      try {
        const response = await authenticate(loginPayload).unwrap()
        console.log(response)
        localStorage.setItem('access', response.access)
        localStorage.setItem('refresh', response.refresh)

        console.log(localStorage.getItem('access'))
        console.log(localStorage.getItem('refresh'))

        setUsername('')
        setPassword('')
        navigate('/home')
      } catch (error) {
        alert('Usuário ou senha inválidos, tente novamente.')
      }
    }
  }

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
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Button type="submit">Cadastrar</Button>
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
