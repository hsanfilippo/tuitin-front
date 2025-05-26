import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import AuthReducer from './reducers/auth'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
