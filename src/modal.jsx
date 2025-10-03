import React from 'react'

function modal({setIsOpen}) {
  return (
    <div>
        <h1>Modal</h1>
        <p>This is a modal content</p>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </div>
  )
}

export default modal