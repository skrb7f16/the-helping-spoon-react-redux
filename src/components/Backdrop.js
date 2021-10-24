import React from 'react'
import styled from 'styled-components'

function Backdrop() {
    return (
        <Container>
            <h1>LOADING......</h1>
        </Container>
    )
}

export default Backdrop

const Container=styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`