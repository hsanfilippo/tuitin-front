import Post from '../../components/Post'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'

import { useGetPostsQuery } from '../../services/api'

const Perfil = () => {
  const userLogedIn = localStorage.getItem('userLogedIn')
  const { data: postsData } = useGetPostsQuery()

  const filteredPosts = postsData?.filter(
    (post) => post.author_username === userLogedIn
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
