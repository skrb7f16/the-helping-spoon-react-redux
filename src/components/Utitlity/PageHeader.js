import React from 'react'
import styled from 'styled-components'

function PageHeader(props) {
    return (
        <Container
        style={{
            backgroundImage:props.bg
        }}
        >
            <HeadingText>{props.headingText}</HeadingText>
            <HeadingDesc>{props.headingDesc}</HeadingDesc>
        </Container>
    )
}

export default PageHeader

const Container=styled.div`
    height: 90vh;
    background-image: url("/assets/postPageBg.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-blend-mode: darken;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const HeadingText=styled.h1`
    color: white;
    font-size: 45px;
    font-weight: bold;
    font-family: 'Piedra', cursive;
`

const HeadingDesc=styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    font-family: cursive;
`