export type GetPostTypes = {
  id: string
  author_username: string
  author_avatar: string
  author_name: string
  content: string
  created_at: string
  author: number
}

export type NewPostTypes = {
  author_username: string
  author_avatar: string
  author_name: string
  content: string
  created_at: string
}

export default GetPostTypes
