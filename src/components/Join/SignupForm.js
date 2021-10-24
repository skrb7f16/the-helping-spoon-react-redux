
import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setShowBackdrop } from '../../features/backdrop/BackdropSlice'
import { setMessage } from '../../features/message/MessageSlice'
import axios from 'axios'
function SignupForm(props) {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email, setEmail] = useState("")
    const [organization, setOrganization] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch()
    const handleSignup=()=>{
        if(username.length<4||password.length<4){
            dispatch(setMessage({
                color:"red",
                message:"username or password or email or city very short",
                active:true
            }))
            return
        }
        if(email.length>=4){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(email).toLowerCase())){
                dispatch(setMessage({
                    color:"red",
                    message:"Email format wrong enter a valid email address",
                    active:true
                }))
                return
            }
        }
        if(city.length<2){
            dispatch(setMessage({
                color:"red",
                message:"city name very short",
                active:true
            }))
            return
        }
        if(organization.length===0){
            dispatch(setMessage({
                color:"red",
                message:"organization not selected",
                active:true
            }))
            return
        }
        dispatch(setShowBackdrop(true))
        axios.post(
            "https://the-helping-spoon-django.herokuapp.com/api/register",
            {
                "username":username,
                "password":password,
                "city":city,
                "organization":organization,
                "email":email
            }
        ).then((response)=>{
            console.log(response);
            dispatch(setShowBackdrop(false))
            dispatch(setMessage({
                color:"green",
                message:response.data.msg+ "Now please login to continue",
                active:true
            }))
            props.setShowLogin(!props.showLogin)
        }).catch((res)=>{
            console.log(res);
            dispatch(setShowBackdrop(false))
        })
    }
    return (
        <Container>
            <h1>Signup</h1>
            <FormField 
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
            />
            <FormField 
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <FormField 
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <FormField placeholder="City"
            value={city}
            onChange={e=>setCity(e.target.value)}
            />
           <FormSelect
           value={organization}
           onChange={e=>setOrganization(e.target.value)}
           >
           <option value="" disabled={true} selected="" hidded="">Are you organization</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
           </FormSelect>
            <FormButton
            onClick={handleSignup}
            
            >Signup</FormButton>
        </Container>
    )
}

export default SignupForm


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

const FormSelect=styled.select`
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
