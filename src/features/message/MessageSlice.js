import { createSlice } from "@reduxjs/toolkit";

const initialState={
    message:"",
    color:"",
    active:false,
}

const MessageSlice=createSlice({
    name:"message",
    initialState,
    reducers:{
        setMessage:(state,action)=>{
            state.message=action.payload.message
            state.color=action.payload.color
            state.active=action.payload.active
        },
        
    }
})

export default MessageSlice.reducer

export const {setMessage}=MessageSlice.actions

export const selectMessage=(state)=>{
    return state.message
}