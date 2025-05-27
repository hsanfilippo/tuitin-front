import Post from '../../components/Post'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'

//   id: string
//   author_username: string
//   author_avatar: string
//   author_name: string
//   content: string
//   created_at: string
//   author: number
// }

export const mockPosts = [
  {
    id: '1',
    author_name: 'Henrique',
    author_username: 'hsanf',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content:
      'Um texto de demonstracao pra ter uma ideia de como vai ficar o post.... como sera que vai ficar hein??? Wolololo',
    author: 1
  },
  {
    id: '2',
    author_name: 'Henrique',
    author_username: 'jao',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content: 'Sei la, oige ta um dia estranho. Nem sol, nem chuva, nem ela.',
    author: 1
  },
  {
    id: '3',
    author_name: 'Henrique',
    author_username: 'naomyn',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content: 'Se pa eu vo comprar uma moto',
    author: 1
  },
  {
    id: '4',
    author_name: 'Henrique',
    author_username: 'hsanf',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content: 'Ta complicado de aguentar aqui na auto escola slc',
    author: 1
  },
  {
    id: '5',
    author_name: 'Henrique',
    author_username: 'hsanf',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content: 'Um tweet sobre tudo e nada ao mesmo tempo',
    author: 1
  },
  {
    id: '6',
    author_name: 'Henrique',
    author_username: 'hsanf',
    author_avatar: 'https://placehold.co/400x400',
    created_at: '24/05/2025',
    content: 'Como as pessoas fazia quando so podia 255 caracteres????',
    author: 1
  }
]

const Perfil = () => {
  return (
    <>
      <Sidebar />
      <Profile />
      {mockPosts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.author_avatar}
          username={post.author_username}
          date={post.created_at}
          name={post.author_name}
          content={post.content}
        />
      ))}
    </>
  )
}

export default Perfil
