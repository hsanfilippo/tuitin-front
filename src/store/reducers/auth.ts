import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogedIn: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userLogedIn = action.payload
    },
    clearUser: (state) => {
      state.userLogedIn = ''
    }
  }
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer
