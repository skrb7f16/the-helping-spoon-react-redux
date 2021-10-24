import { createSlice } from "@reduxjs/toolkit";

const initialState={
    sideDrawerShown:false,
    showHeaderBackground:false,
}

const headerSlice=createSlice({
    name:"header",
    initialState,
    reducers:{
        setSideDrawer:(state)=>{
            state.sideDrawerShown=!state.sideDrawerShown
        },
        setHeaderBackground:(state,action)=>{
            state.showHeaderBackground=action.payload
        }
    }
})

export const {setSideDrawer,setHeaderBackground}=headerSlice.actions

export default headerSlice.reducer

export const selectSideDrawerShown=(state)=>{
    return state.header.sideDrawerShown
}
export const selectHeaderBackground=(state)=>{
    return state.header.showHeaderBackground
}