import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetPostTypes, NewPostTypes } from '../models/PostTypes'

type AuthPayload = {
  username: string
  password: string
}

type RegisterPayload = {
  email: string
  username: string
  password: string
}

type UserData = {
  username?: string
  profile?: {
    avatar?: string | null
    bio?: string | null
    birthdate?: string | null
    cover?: string | null
    name?: string | null
  }
}

type NewPost = {
  content: string
}

type NewComment = {
  post: string
  content: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api'
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<UserData, string>({
      query: (username) => ({
        url: `users/${username}/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
    }),
    postAuth: builder.mutation<any, AuthPayload>({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body: body
      })
    }),
    postRegister: builder.mutation<any, RegisterPayload>({
      query: (body) => ({
        url: 'register/',
        method: 'POST',
        body: body
      })
    }),
    postFollow: builder.mutation<any, string>({
      query: (username) => ({
        url: `users/${username}/follow/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
    }),
    postUnfollow: builder.mutation<any, string>({
      query: (username) => ({
        url: `users/${username}/unfollow/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
    }),
    getIsFollowing: builder.query<{ is_following: boolean }, string>({
      query: (username) => ({
        url: `users/${username}/is_following/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
    }),
    patchUpdateMe: builder.mutation<any, UserData>({
      query: (body) => ({
        url: 'me/',
        method: 'PATCH',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`
        }
      })
    }),
    getPosts: builder.query<GetPostTypes[], void>({
      query: () => ({
        url: 'posts/',
        method: 'GET'
      })
    }),
    postNewPost: builder.mutation<any, NewPost>({
      query: (body) => ({
        url: 'posts/',
        method: 'POST',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    deletePost: builder.mutation<any, string>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    likePost: builder.mutation<any, string>({
      query: (id) => ({
        url: `posts/${id}/toggle_like/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    newComment: builder.mutation<any, NewComment>({
      query: (body) => ({
        url: 'comentarios/',
        method: 'POST',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json'
        }
      })
    })
  })
})

export const {
  useGetUserDataQuery,
  usePostAuthMutation,
  usePostRegisterMutation,
  usePostFollowMutation,
  usePostUnfollowMutation,
  useGetIsFollowingQuery,
  usePatchUpdateMeMutation,
  useGetPostsQuery,
  usePostNewPostMutation,
  useDeletePostMutation
} = api

export default api
