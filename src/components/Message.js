import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectMessage, setMessage } from '../features/message/MessageSlice'
function Message() {
    const dispatch=useDispatch()
    const state=useSelector(selectMessage)
    const handleHideMessage=()=>{
        dispatch(setMessage({
            active:false,
            color:"",
            message:""
        }))
    }
    return (
        <Container
            style={{
                display: state.active?"flex":"none",
                background: state.color,
            }}
        
        >
        <DisplayMessage>{state.message}</DisplayMessage>
        <HideMessage
        onClick={handleHideMessage}
        
        >X</HideMessage>
        </Container>
    )
}

export default Message
const Container=styled.div`
    position: fixed;
    bottom: 20%;
    right: 20%;
    min-height: 30px;
    max-width: 40%;
    min-width: 100px;
    background-color: red;
    z-index: 100;
    align-items: flex-start;
    display: none;
    justify-content: space-around;
    padding: 5px;
    color: white;
    @media (max-width:786px){
        right: 10%;
        bottom: 10%;
    }

`

const DisplayMessage=styled.div`
    letter-spacing: 1.5px;
    max-width: 90%;
    text-align: left;
`

const HideMessage=styled.div`
    cursor: pointer;
`