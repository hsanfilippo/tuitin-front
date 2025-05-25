import Post from '../../components/Post'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'

export const mockPosts = [
  {
    id: 1,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content:
      'Um texto de demonstracao pra ter uma ideia de como vai ficar o post.... como sera que vai ficar hein??? Wolololo'
  },
  {
    id: 2,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content: 'Sei la, oige ta um dia estranho. Nem sol, nem chuva, nem ela.'
  },
  {
    id: 3,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content: 'Se pa eu vo comprar uma moto'
  },
  {
    id: 4,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content: 'Ta complicado de aguentar aqui na auto escola slc'
  },
  {
    id: 5,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content: 'Um tweet sobre tudo e nada ao mesmo tempo'
  },
  {
    id: 6,
    name: 'Henrique',
    username: 'hsanf',
    avatarUrl: 'https://placehold.co/400x400',
    date: '24/05/2025',
    content: 'Como as pessoas fazia quando so podia 255 caracteres????'
  }
]

const Perfil = () => {
  return (
    <>
      <Sidebar avatarUrl="https://placehold.co/400x400" />
      <Profile
        username="hsanf"
        name="Henrique"
        avatarUrl="https://placehold.co/400x400"
        bannerUrl="https://placehold.co/700x400"
      />
      {mockPosts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.avatarUrl}
          username={post.username}
          date={post.date}
          name={post.name}
          content={post.content}
        />
      ))}
    </>
  )
}

export default Perfil
