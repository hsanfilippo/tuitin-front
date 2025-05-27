import Post from '../Post'
import GetPostTypes from '../../models/PostTypes'

type Props = {
  posts: GetPostTypes[]
}

const PostsHome = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.author_avatar}
          name={post.author_name}
          username={post.author_username}
          date={post.created_at}
          content={post.content}
        />
      ))}
    </>
  )
}

export default PostsHome
