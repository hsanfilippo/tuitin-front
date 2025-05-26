import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type AuthPayload = {
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
    })
  })
})

export const { usePostAuthMutation } = api

export default api
