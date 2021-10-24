import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import PageHeader from './Utitlity/PageHeader'
import { selectPost, setPosts } from '../features/newsfeeds/NewsFeedsSlice'
import axios from 'axios'
import SingleNewsFeed from './Utitlity/SingleNewsFeed'
import { setShowBackdrop } from '../features/backdrop/BackdropSlice'

function NewsFeed() {
    const dispatch=useDispatch()
    const posts=useSelector(selectPost)
    useEffect(()=>{
        if(!posts){
            dispatch(setShowBackdrop(true))
            axios.get("https://the-helping-spoon-django.herokuapp.com/api/allFeeds")
        .then(response=>{
            dispatch(setPosts(response.data.reverse()))
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
            <PageHeader headingText={"Latest updates"} headingDesc={"Welcome, here are the latest activity"} 
            bg={'url("/assets/postPageBg.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21))'}
            
            />
            <HeadingText>Latest updated !!!</HeadingText>
            {posts?posts.map((p,i)=>{
                
                return <SingleNewsFeed key={i} post={p} index={i} />
            }):null}
        </Container>
    )
}

export default NewsFeed

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
`

const HeadingText=styled.h1`
    font-size: 35px;
    font-weight: bold;
    font-family: 'Piedra', cursive;
    
`