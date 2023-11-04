import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/home/:id' element={<Home/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
