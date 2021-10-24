import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setShowBackdrop } from '../../features/backdrop/BackdropSlice'
import axios from 'axios'
import { setMessage } from '../../features/message/MessageSlice'
import {setUser} from '../../features/user/UserSlice'
import { useHistory } from 'react-router'
function LoginForm() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const history=useHistory()
    const dispatch = useDispatch()
    const handleLogin=()=>{
        if(username.length<4 || password.length<4){
            dispatch(setMessage({
                color:"red",
                message:"username or password very short",
                active:true
            }))
            return
        }
        dispatch(setShowBackdrop(true))
        axios.post(
            "https://the-helping-spoon-django.herokuapp.com/api/auth-token/",
            {
                "username":username,
                "password":password
            }
        ).then((response)=>{
            
            dispatch(setShowBackdrop(false))
            dispatch(setMessage({
                color:"green",
                message:"Logged in as "+username,
                active:true
            }))
            localStorage.setItem("TOKEN",response.data.token)
            localStorage.setItem("username",username)
            dispatch(setUser({
                token:response.data,
                username:username
            }))
            setUsername("")
            setPassword("")
            history.push("user/"+localStorage.getItem("username"))
        }).catch((res)=>{
            console.log(res);
            dispatch(setShowBackdrop(false))
        })
    }
    return (
        <Container>
            <h1>Login</h1>
            <FormField 
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
            />
            <FormField 
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <FormButton
            onClick={handleLogin}
            
            >Login</FormButton>
        </Container>
    )   
}

export default LoginForm

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`
const FormField=styled.input`
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 8px;
    box-shadow:4px 4px 10px rgb(34,21,21);
    margin-top: 10px;
    outline:none;
    padding: 5px;
    font-size: 18px;
`

const FormButton=styled.button`
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: rgb(34,21,21);
    color: white;
    margin-right: 72%;
`