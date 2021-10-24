import React ,{useState} from 'react'
import styled from 'styled-components'
import LoginForm from './Join/LoginForm'
import SignupForm from './Join/SignupForm'

function Join() {
    const [showLogin,setShowLogin]=useState(false)
    
    return (
        <Container>
            <h1>Join Us !!!</h1>
            <Box>
                <ToggleGroup>
                    <LoginButton
                    style={{
                        boxShadow:!showLogin?"4px 4px 20px rgb(34, 21, 21)":"inset 4px 4px 20px rgb(34, 21, 21)",
                    }}
                    onClick={()=>setShowLogin(true)}
                    >LOGIN</LoginButton>
                    <SignupButton
                    style={{
                        boxShadow:showLogin?"4px 4px 20px rgb(34, 21, 21)":"inset 4px 4px 20px rgb(34, 21, 21)",
                    }}
                    onClick={()=>setShowLogin(false)}
                    >SIGNUP</SignupButton>
                </ToggleGroup>
                {showLogin?<LoginForm />:<SignupForm showLogin={showLogin} setShowLogin={setShowLogin} />}
            </Box>
        </Container>
    )
}

export default Join

const Container=styled.div`
    background: url("/assets/joinUsBg.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color:white;
    align-items: center;
    justify-content: center;
    
`
const Box=styled.div`
    display: flex;
    border-radius: 8px;
    align-items: center;
    min-height: 70%;
    width: 40%;
    background-color: white;
    flex-direction: column;
    color: black;
    background: url("/assets/handshaking.png"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-color: white;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width:786px){
        width: 80%;
        height: 80%;
    }
`

const ToggleGroup=styled.div`
    height: 20%;
    width: 100%;
    /* background-color: grey; */
    border-radius: 8px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`
const LoginButton=styled.button`
    height: 80%;
    width: max-content;
    flex: 1;
    margin: 15px;
    background-color: white;
    color:black;
    letter-spacing: 1.5px;
    font-size: 18px;
    @media (max-width:786px){
        height:40%;
    }

`
const SignupButton=styled(LoginButton)`

`