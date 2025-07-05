import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Profile from './components/Profile'
import ProjectShow from './components/ProjectShow'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Profile />
      <ProjectShow />
      <Footer />

    </div>
  )
}

export default App
