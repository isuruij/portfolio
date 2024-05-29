import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Posts from './Components/Posts'
import './App.css'


function App() {
  return (
    <div style={{marginLeft:"0px",backgroundColor:""}}>
      <Hero />
      <About/>
      <ProjectList/>
      <Posts/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App