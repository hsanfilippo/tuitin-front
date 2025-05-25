import Post from '../Post'
import PostTypes from '../../models/PostTypes'

type Props = {
  posts: PostTypes[]
}

const PostsHome = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.avatarUrl}
          name={post.name}
          username={post.username}
          date={post.date}
          content={post.content}
        />
      ))}
    </>
  )
}

export default PostsHome
