export type GetPostTypes = {
  id: string
  author_username: string
  author_avatar: string
  author_name: string
  content: string
  created_at: string
  author: number
  comments: [
    {
      id: number
      post: string
      author: 1
      author_username: string
      content: string
      created_at: string
    }
  ]
}

export type NewPostTypes = {
  author_username: string
  author_avatar: string
  author_name: string
  content: string
  created_at: string
}

export default GetPostTypes
