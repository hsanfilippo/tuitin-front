import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogedIn: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLogedIn: (state, action) => {
      state.userLogedIn = action.payload
    },
    clearUserLogedIn: (state) => {
      state.userLogedIn = ''
    }
  }
})

export const { setUserLogedIn, clearUserLogedIn } = authSlice.actions
export default authSlice.reducer
