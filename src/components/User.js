import React, { useState } from 'react'

import styled from 'styled-components'
import PageHeader from './Utitlity/PageHeader'

import UserActivity from './User/UserActivity'
import PostAnActivity from './User/PostAnActivity'
function User() {
    const [showActivity,setShowActivity]=useState(true)
   
    return (
        <Container>
            <PageHeader 
            headingText={localStorage.getItem("username")}
            headingDesc={"Welcome, here are your activity and details and thankyou for joining us!!!!"}
            bg={'url("/assets/userpage.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21))'}
            />
            <ToggleGroup>
                    <ActivityButton
                    style={{
                        boxShadow:!showActivity?"4px 4px 20px rgb(34, 21, 21)":"inset 4px 4px 20px rgb(34, 21, 21)",
                    }}
                    onClick={()=>setShowActivity(true)}
                    >ACTIVITY</ActivityButton>
                    <PostAnActivityButton
                    style={{
                        boxShadow:showActivity?"4px 4px 20px rgb(34, 21, 21)":"inset 4px 4px 20px rgb(34, 21, 21)",
                    }}
                    onClick={()=>setShowActivity(false)}
                    >POST ACTIVITY</PostAnActivityButton>
                </ToggleGroup>
            {showActivity?<UserActivity />:<PostAnActivity />}
           
        </Container>
    )
}

export default User

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

`

const ToggleGroup=styled.div`
    height: 10vh;
    width: 80%;
    border-radius: 8px;
    display:flex;
    align-items: center;
    justify-content: center;

    @media (max-width:786px){
        height: 20vh;
    }
`
const ActivityButton=styled.button`
    height: 80%;
    width: 40%;
    flex: 1;
    margin: 5px;
    background-color: white;
    color:black;
    letter-spacing: 1.5px;
    font-size: 18px;
    @media (max-width:786px){
        height:40%;
    }

`
const PostAnActivityButton=styled(ActivityButton)`

`