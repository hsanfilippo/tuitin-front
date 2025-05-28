# 🐳 Tuitin - Frontend

Este é o front-end do **Tuitin**, um microblog minimalista inspirado no Twitter. A aplicação foi construída com React, Redux Toolkit e Styled Components.

> 🔗 Produção: https://tuitin.vercel.app/

---

## ✨ Funcionalidades

- 📤 **Criação de tuits**
- 📤 **Cadastro e login de usuários**
- 📖 **Listagem e detalhes de tuits**
- ✏️ **Edição de tuits**
- ❌ **Exclusão de tuits**
- 🔄 **Seguir/desseguir outros usuários**
- 🖼️ **Alteração de perfil (imagem, capa, nome, etc.)**

## 🧪 Tecnologias Utilizadas
- ⚛️ React (com Create React App)
- ⚛️ Redux Toolkit
- 🟦 TypeScript
- 🔐 JWT (JSON Web Token) para autenticação
- 📦 Redux Toolkit Query para consumo da API
- 🎨 Styled-components para estilização
- 🛠️ ESLint + Prettier para padronização de código
- 🌐 Vercel para deploy gratuito

## 📦 Instalação
### 1 - Clone o repositório:
- `git clone https://github.com/hsanfilippo/tuitin-front.git`
- `cd tuitin-front`

### 2 - Instale as dependências:
- `npm install`

### 3 - Inicie o servidor local:
- `npm start`

### 4 - Acesse `http://localhost:3000` no navegador.

### Importante:
  - Leia o README de https://github.com/hsanfilippo/tuitin-back para configurar a API e DB para funcionamento correto da aplicação.

## 🛡️ Autenticação
O sistema de autenticação usa JWT (JSON Web Token). O token é armazenado localmente (`localStorage`) e adicionado automaticamente às requisições protegidas.

## 🤝 Contribuindo
Contribuições são bem-vindas!
Abra uma issue ou envie um PR.
