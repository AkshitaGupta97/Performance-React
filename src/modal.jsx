import React from 'react'

function Modal({close}) {
  return (
    <div>
        <h1>Modal</h1>
        <p>This is a modal content</p>
        <button onClick={close}>Close Modal</button>
    </div>
  )
}

export default Modal

/* before using custom hook
function Modal({setIsOpen}) {
  return (
    <div>
        <h1>Modal</h1>
        <p>This is a modal content</p>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </div>
  )
}
 */