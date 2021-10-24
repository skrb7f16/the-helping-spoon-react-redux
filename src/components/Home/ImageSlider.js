import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ImageSlider() {
    const [slideNumber, setSlideNumber] = useState(1)
    const [margin, setMargin] = useState(0)

    const sliderNext=()=>{
        if(slideNumber===3){
            return
        }
        setMargin(margin-100)
        setSlideNumber(slideNumber+1)
    }
    
    const sliderPrev=()=>{
        if(slideNumber===1){
            return
        }
        setMargin(margin+100)
        setSlideNumber(slideNumber-1)
        
    }
    return (
        <Container>
            <Slide1
            style={{
                marginLeft: String(margin+"vw"),
            }}
            
            >
            <h1>The Helping Spoon</h1>
            <h2> A spoon which serves the every citizen !! </h2>
            <Link to="/join">Get Started</Link>
            </Slide1>
            <Slide2>
            <h2>If you can't feed a hundred people,then just feed one </h2>
            </Slide2>
            <Slide3>
            <h2>Giving is not just a donation ,its about making difference </h2>
            </Slide3>
        <PrevSlide 
            onClick={sliderPrev}
        >&#10094;</PrevSlide>
        <NextSlide
            onClick={sliderNext}
        >&#10095;</NextSlide>
        </Container>
    )
}

export default ImageSlider

const Container=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 90vh;
    display: flex;
    overflow: hidden;
    color: white;
`

const Slide1=styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-image: url("/assets/first.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
    transition: 2s;
    background-blend-mode: darken;
    a{
        border: 2px solid white;
        padding: 5px;
        border-radius: 8px;
        color: white;
        text-decoration: none;
        
        &:hover{
            background-color: white;
            color: black;
        }
    }
    
`
const Slide2=styled.div`
flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-image: url("/assets/orphans.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
    transition: 2s;
    background-blend-mode: darken;
`
const Slide3=styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-image: url("/assets/foodDistribution.jpg"),linear-gradient( rgb(151, 144, 144), rgb(34, 21, 21));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
    transition: 2s;
    background-blend-mode: darken;

`

const PrevSlide=styled.span`
    position: absolute;
    font-size: 40px;
    background-color: white;
    top: 40%;
    opacity: 0.2;
    cursor: pointer;
    color: black;
    left: 20px;
    transition: all 250ms;
    &:hover{
        opacity: 0.8;
    }
`
const NextSlide=styled.span`
     position: absolute;
    font-size: 40px;
    background-color: white;
    top: 40%;
    opacity: 0.2;
    cursor: pointer;
    color: black;
    right: 20px;
    transition: all 250ms;
    &:hover{
        opacity: 0.8;
    }
`