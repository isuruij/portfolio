import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import Contact from './Components/Contact'
import './App.css'

function App() {
  return (
    <div style={{marginLeft:"0px",backgroundColor:""}}>
      <Hero />
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  )
}

export default App