import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Posts from './Components/Posts'
import Navbar from './Components/Navbar'
import './App.css'


function App() {
  return (
    <div style={{marginLeft:"0px",backgroundColor:""}}>
      <div><Navbar/></div>
      <div id='home'><Hero/></div>
      <div id='about'><About/></div>
      <div id='projects'><ProjectList/></div>
      <div id='posts'><Posts/></div>
      <div id='contact'><Contact/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App