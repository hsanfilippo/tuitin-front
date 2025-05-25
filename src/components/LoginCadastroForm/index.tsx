import { useState } from 'react'
import { Logo, Button, Card, Container, Input, Title, Toggle } from './styles'
import logoDocker from '../../assets/images/docker_logo.png'
import { useNavigate } from 'react-router-dom'

const LoginCadastroForm = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup) {
      console.log('Cadastrar:', { name, email, password })
    } else {
      console.log('Login:', { email, password })
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
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <Button type="submit" onClick={() => navigate('/home')}>
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
