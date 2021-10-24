import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { selectSideDrawerShown } from '../features/header/headerSclice';
import { Link,useHistory } from 'react-router-dom';
import {selectUser, setUserLogout} from '../features/user/UserSlice'
function SideDrawer() {
    
    const shown=useSelector(selectSideDrawerShown)
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const history=useHistory()
    const handleLogout=()=>{
        dispatch(setUserLogout())
        history.push("/")

    }
    return (
        <Container
        style={{
            width: shown?"35%":"0",
            height: shown?"100vh":"0",
        }}
        >
            <Link to="/"><NavItems>Home</NavItems></Link>
           <NavItems href="/#about">About us</NavItems>
            <Link to="/join"><NavItems>Join us</NavItems></Link>
            <Link to="/newsFeed"><NavItems>NewsFeeds</NavItems></Link>
            <Link to={!user.loggedIn?"/join":"/user/"+localStorage.getItem("username")}><NavItems>{user.loggedIn?user.username:"User"}</NavItems></Link>
            {user.loggedIn?<NavItems
            onClick={handleLogout}
            >Logout</NavItems>:null}
        </Container>
    )
}

export default SideDrawer
const Container=styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 0;
    width: 0;
    display: flex;
    overflow-y: hidden;
    background-color: rgb(34, 21, 21);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 250ms;
    z-index: 2;
    a{
        text-decoration: none;
    }
`

const NavItems=styled.a`
    color: white;
    cursor: pointer;
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    font-size: 20px;
    &:after{
        content: "";
        width: 0;
        height: 2px;
        background-color: white;
        color: white;
        position: absolute;
        bottom: -6px;
        opacity: 0;
        transition: all 350ms;
        
    }
    &:hover{
        &:after{
            opacity: 1;
            width: 100%;
        }
    }
    
`