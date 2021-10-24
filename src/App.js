import React,{useEffect} from 'react';

import './App.css';
import { useDispatch } from 'react-redux';
import SideDrawer from './components/SideDrawer';
import Header from './components/Header';
import Home from './components/Home'
import { setHeaderBackground } from './features/header/headerSclice';
import { selectShowBackdrop } from './features/backdrop/BackdropSlice';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/About';
import Join from './components/Join';
import Backdrop from './components/Backdrop';
import Message from './components/Message';
import NewsFeed from './components/NewsFeed';
import User from './components/User';

function App() {
  const dispatch=useDispatch()
  const showBD=useSelector(selectShowBackdrop)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>0){
        dispatch(setHeaderBackground(true))
      }
      else{
        dispatch(setHeaderBackground(false))
      }
    })
  },[dispatch])
  
  return (
    <div className="App">
      {showBD?<Backdrop />:null}
      <Router>
        <Header />
        <SideDrawer />
        <Message />
        <Switch>
        <Route exact path="/">
          <Home />
          <About />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/newsFeed">
          <NewsFeed />
        </Route>
        <Route path="/user/:username">
          <User />
          
        </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
