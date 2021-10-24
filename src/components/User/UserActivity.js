import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { selectUserPosts, setUserPosts } from '../../features/newsfeeds/NewsFeedsSlice'
import axios from 'axios'
import SingleNewsFeed from '../Utitlity/SingleNewsFeed'
import { setShowBackdrop } from '../../features/backdrop/BackdropSlice'
function UserActivity() {
    const dispatch=useDispatch()
    const posts=useSelector(selectUserPosts)
    useEffect(()=>{
        if(!posts){
            dispatch(setShowBackdrop(true))
            axios.get("https://the-helping-spoon-django.herokuapp.com/api/feeds",{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Token  ${localStorage.getItem("TOKEN")}`
                },
                
            })
        .then(response=>{
            console.log(response.data)
            dispatch(setUserPosts(response.data.reverse()))
            dispatch(setShowBackdrop(false))
        })
        .catch(response=>{
            console.log(response.data)
            dispatch(setShowBackdrop(false))
        })
        }
        
        
    },[])
    return (
        <Container>
            {!posts?<h1>NO ACTIVITY</h1>:posts.map((p,i)=>{
                return <SingleNewsFeed key={i} post={p} index={i} />
            })}
        </Container>
    )
}

export default UserActivity

const Container=styled.div`
    display: flex;
    flex-direction: column;

`