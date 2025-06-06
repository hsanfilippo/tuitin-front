import Post from '../Post'

import { useGetPostsQuery } from '../../services/api'

const PostsHome = () => {
  const { data: posts } = useGetPostsQuery()

  return (
    <>
      {posts?.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.author_avatar}
          name={post.author_name}
          username={post.author_username}
          date={post.created_at}
          content={post.content}
          id={post.id}
          comments={post.comments}
        />
      ))}
    </>
  )
}

export default PostsHome
