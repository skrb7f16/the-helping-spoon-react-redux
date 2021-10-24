import { createSlice } from "@reduxjs/toolkit";

const initialState={
    username:localStorage.getItem("username"),
    token:localStorage.getItem("TOKEN"),
    loggedIn:localStorage.getItem("TOKEN")?true:false
}

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.username=action.payload.username
            state.token=action.payload.token
            state.loggedIn=true
        },
        setUserLogout:(state)=>{
            localStorage.removeItem("username")
            localStorage.removeItem("TOKEN")
            state.loggedIn=false
        }
    }
})

export default UserSlice.reducer

export const {setUser,setUserLogout}=UserSlice.actions

export const selectUser=(state)=>{
    return state.user
}