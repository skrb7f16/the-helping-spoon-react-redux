import React from 'react'
import styled from 'styled-components'

function SingleNewsFeed(props) {
    
    
   
    return (
        <Container
            className={props.index%2?"row-reverse":"row"}
        >
            <Image src={"https://res.cloudinary.com/skrb7f16/"+props.post.pic} />
            <Desc>
                <h1>{props.post.title}</h1>
                <span>
                <Row>
                    <b>Address </b><div />{props.post.address}
                   
                </Row>
                <Row>
                <b>Phone </b><div />{props.post.phone}
                </Row>
                <Row>
                <b>Description </b><div />{props.post.desc}
                </Row>
                <Row>
                <b>City </b><div />{props.post.city}
                </Row>
                <Row>
                <b>by </b><div />{props.post.author.user.username}
                </Row>
                <Row>
                <b>at </b><div />{new Date(props.post.at).toDateString()}
                </Row>
                </span>
            </Desc>
        </Container>
    )
}

export default SingleNewsFeed

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    transition: all 650ms;
    padding: 20px;
    width: 90%;
    margin: 20px;
    border-radius: 8px;
    @media (max-width:786px){
        height: fit-content;
        width: 80%;
        transition: all 650ms;
        
    }

    &:hover{
        letter-spacing: 1.3px;
        box-shadow: 2px 2px 10px black;
        
    }
    
`

const Image=styled.img`
    width: 20%;
    border-radius: 8px;
    @media (max-width:786px){
        
        width: 60%;
        justify-content: center;
        align-items: center;
    }
`
const Desc=styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    @media (max-width:786px){
        width: 90%;
    }
    h1{
        font-family: 'Piedra', cursive;
    }
    span{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const Row=styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    text-align: left;
    @media (max-width:786px){
        height: max-content;
      
    }
    div{
        width: 10px;
    }
`



