import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type AuthPayload = {
  username: string
  password: string
}

type RegisterPayload = {
  email: string
  username: string
  password: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api'
  }),
  endpoints: (builder) => ({
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
    })
  })
})

export const {
  usePostAuthMutation,
  usePostRegisterMutation,
  usePostFollowMutation,
  usePostUnfollowMutation,
  useGetIsFollowingQuery
} = api

export default api
