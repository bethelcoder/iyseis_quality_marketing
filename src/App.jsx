import React from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      {/* <About/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App