import React from 'react'
import '../styles/navbar.css'

const Navbar = props => {
  const { count, text } = props.countText
  return (
    <nav className='nav-container'>
      <span id='nav-title'>To-Do</span>
      <div id='items-counter'>
        <div className='nav-counter-container'>
          <strong>{count}</strong>
        </div>
        <div className='nav-text-container'>
          <strong>{text}</strong>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
