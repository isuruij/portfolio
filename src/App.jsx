import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import ProjectList from './Components/ProjectList'
import './App.css'

function App() {
  return (
    <div style={{marginLeft:"0px"}}>
      <Hero />
      <About/>
      <ProjectList/>
    </div>
  )
}

export default App