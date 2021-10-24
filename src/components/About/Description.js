import React from 'react'
import styled from 'styled-components'

function Description() {
    return (
        <Container>
            <img src="/assets/orphanKidsEating.jpg" alt="" />
            <span>We aim to redistribute surplus food to those who are in need of it .
                If you have excess food from an event, party, wedding, etc, please call our helpline, volunteers .
                they will collect the excess food from you and distribute aming people who need it . 
                The excess food will be checked for quality beacuase lack of propoer refrigeration and storage tends to spoil food. 
                Here not only the giving part is done also you can take food for the needy persons around you and help them .</span>
        </Container>
    )
}

export default Description

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   
    
    margin: 30px;
    padding: 10px;
    border-radius: 8px;
    transition: all 650ms;
    &:hover{
        box-shadow: 2px 2px 10px black;
        letter-spacing: 1.2px;
    }
    img{
        border-radius: 8px;
        
    }
    

    @media (max-width:786px){
        flex-direction: column;
    }

`