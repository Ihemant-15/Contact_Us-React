import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contactform from './Components/Contactform'


const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='main-container'>
      <Home/>
      <Contactform/>
      </main>
     
    </div>
  )
}

export default App
