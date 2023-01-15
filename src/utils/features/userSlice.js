import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('firstName', action.payload.user.firstName)
            localStorage.setItem('lastName', action.payload.user.lastName)
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer