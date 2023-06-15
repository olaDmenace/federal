import { createSlice } from '@reduxjs/toolkit'

const storedToken = localStorage.getItem('token');

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: !!storedToken,
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('firstName', action.payload.user.firstName)
            localStorage.setItem('lastName', action.payload.user.lastName)
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isAuthenticated = false
            localStorage.clear()
            state.user = {}
        }
    }
})

export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user

export default userSlice.reducer