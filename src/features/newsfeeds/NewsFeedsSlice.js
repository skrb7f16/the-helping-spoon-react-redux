import { createSlice } from "@reduxjs/toolkit";



const initialState={
    posts:null,
    userPosts:null
}

const NewsFeedsSlice=createSlice({
    name:"newsfeeds",
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts=action.payload
        },
        setUserPosts:(state,action)=>{
            state.userPosts=action.payload
        }
    }
})

export default NewsFeedsSlice.reducer

export const {setPosts,setUserPosts}=NewsFeedsSlice.actions

export const selectPost=(state)=>{
    return state.newsfeeds.posts
}
export const selectUserPosts=(state)=>{
    return state.newsfeeds.userPosts
}