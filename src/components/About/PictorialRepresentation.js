import React from 'react'
import styled from 'styled-components'

function PictorialRepresentation() {
    return (
        <Container>
            <div>
                <img 
              
                src="/assets/joinUsLogo.png" alt="img" />
            </div>
            <Arrow>
            <img src="/assets/arrow.png" alt="" />
            </Arrow>
            
            
            {/* <h1 class="arrowSmallScreen">&#8595;</h1> */}
            <div>
                <img
                src="/assets/donateAndHelp.jpg" alt="img" />
            </div>
            <Arrow>
            <img src="/assets/arrow.png" alt="" />
            </Arrow>
            {/* <h1 class="arrowSmallScreen">&#8595;</h1> */}
            <div>
               <img
                src="/assets/happyChildren.jpg" alt="" />
            </div>
        </Container>
    )
}

export default PictorialRepresentation

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 90vh;
    margin: 30px;
    padding: 10px;
    border-radius: 8px;
    transition: all 650ms;
    img{
        width: 10%;
    }
    div{
        width: 20%;
        img{
            width: 100%;
        }
    }
    span{
        background-color: red;
    }
    &:hover{
        box-shadow: 2px 2px 10px black;
        letter-spacing: 1.2px;
    }
    h1{
        font-size: 80px;
    }
    @media (max-width:786px){
        flex-direction: column;
        div{
        width: 30%;
        img{
            width: 100%;
        }
    }
    }
`

const Arrow=styled.div`
    width: 10%;
    @media (max-width:786px){
        transform: rotate(90deg);
        
    }

`