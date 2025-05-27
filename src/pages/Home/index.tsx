import Postar from '../../components/Postar'
import PostsHome from '../../components/PostsHome'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  return (
    <>
      <Sidebar avatarUrl="https://placehold.co/400x400" />
      <Postar avatarUrl="https://placehold.co/400x400" />
      <PostsHome />
    </>
  )
}

export default Home
