import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Pages/Home'
import Footer from './components/Footer'




const App = () => {
  return (
    <div >
      
      <NavBar />

      <Routes>
        
      <Route path='/home' element={<Home></Home>} />
       
          
      </Routes>
      <Footer />
     
    </div>
  )
}

export default App
