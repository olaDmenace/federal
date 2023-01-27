import { createSlice } from "@reduxjs/toolkit";

export const truckSlice = createSlice({
    name: 'truck',
    initialState: {
        response: null
    },
    reducers: {
        truck: (state, action) => {
            localStorage.setItem('response', action.payload.response)
            state.truck = action.payload
        }
    }
})

export const { truck } = truckSlice.actions;

export const selectTruck = (state) => state.truck

export default truckSlice.reducer