import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cars: ["HOME" , "ABOUT" , "INSTITUTIONS" , "PROJECTS" , "TEAM", "RESEARCH"]
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer