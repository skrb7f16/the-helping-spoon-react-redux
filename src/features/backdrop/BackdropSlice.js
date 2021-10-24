import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showBackDrop:false
}

const backDropSlice=createSlice({
    name:"backdrop",
    initialState,
    reducers:{
        setShowBackdrop:(state,action)=>{
            state.showBackDrop=action.payload
        }
    }
})

export default backDropSlice.reducer

export const {setShowBackdrop}=backDropSlice.actions

export const selectShowBackdrop=(state)=>{
  
    return state.backdrop.showBackDrop
}