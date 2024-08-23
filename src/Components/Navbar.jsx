import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <div>
            <img src='/images/Frame.png' alt='logo'/>
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
