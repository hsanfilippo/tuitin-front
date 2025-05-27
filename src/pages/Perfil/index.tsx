import { useParams } from 'react-router-dom'
import Post from '../../components/Post'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'

import { useGetPostsQuery } from '../../services/api'

const Perfil = () => {
  const { username } = useParams<{ username: string }>()
  const { data: postsData } = useGetPostsQuery()

  const filteredPosts = postsData?.filter(
    (post) => post.author_username === username
  )

  return (
    <>
      {filteredPosts ? (
        <>
          <Sidebar />
          <Profile />
          {filteredPosts.map((post) => (
            <Post
              key={post.id}
              avatarUrl={post.author_avatar}
              username={post.author_username}
              date={post.created_at}
              name={post.author_name}
              content={post.content}
              id={post.id}
            />
          ))}
        </>
      ) : (
        <h3>Você ainda não tem publicações.</h3>
      )}
    </>
  )
}

export default Perfil
