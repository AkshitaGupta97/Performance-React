//import { useState } from 'react';
import Modal from './modal';
import useModalHook from './hooks/useModalHook';

function ButtonWithModal() {
    // const [isOpen, setOpen] = useState(false);
    const {isOpen, open, close} = useModalHook();
  return (
    <div>
        <button onClick={open}>Open Modal</button>
        {isOpen && <Modal close={close}/>}
    </div>
  )
}

export default ButtonWithModal

/* before using custom hook
function ButtonWithModal() {
     const [isOpen, setOpen] = useState(false);
    
  return (
    <div>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        {isOpen && <Modal setIsOpen={setOpen}/>}
    </div>
  )
}
 */