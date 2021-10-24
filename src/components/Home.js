import React from 'react'
import styled from 'styled-components'
import ImageSlider from './Home/ImageSlider'

function Home() {
    return (
        <Container>
            <ImageSlider />
        </Container>
    )
}

export default Home

const Container=styled.div`
    position: relative;
`