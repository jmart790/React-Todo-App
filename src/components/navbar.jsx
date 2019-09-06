import React from 'react'

const Navbar = props => {
  return (
    <nav>
      <h1>To-Do</h1>
      <strong>{props.countText}</strong>
    </nav>
  )
}

export default Navbar
