import React from 'react'
import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux';
import { selectHeaderBackground, selectSideDrawerShown, setSideDrawer } from '../features/header/headerSclice';
function Header() {
    const dispatch = useDispatch();
    const shown=useSelector(selectSideDrawerShown)
    const showHeaderBg=useSelector(selectHeaderBackground)
    const handleShowSideDrawer=()=>{
        dispatch(setSideDrawer())
    }
    return (
        <Container
            style={{
                background: showHeaderBg?"rgb(34, 21, 21)":"transparent",
            }}
        >
            <Logo src="assets/logo.jpeg" />
            <Burger
            style={{
                height: shown?"0px":"40px",
            }}
            onClick={handleShowSideDrawer}
            >
                <div></div>
                <div></div>
                <div></div>
            </Burger>
        </Container>
    )
}

export default Header

const Container=styled.div`
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 0 20px;
`

const Logo=styled.img`
    width: 70px;
    border-radius: 50%;

`

const Burger=styled.div`
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    padding: 3px;
    border-radius: 8px;
    background-color: white;
    transition: all 250ms;
    cursor: pointer;
    div{
        width: 100%;
        height: 5px;
        background-color: black;
        box-shadow: 1px 1px 1px black;
    }
`