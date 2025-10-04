
import { useState, memo, useCallback, useMemo } from 'react'
import './App.css'
import ButtonWithModal from './ButtonWithModal'
import RefactorComponent from './RefactorComponent'
import SlowComponent from './SlowComponent'
import Modal from './modal'
import AnotherSlow from './AnotherSlow'
//import useModalHook from './hooks/useModalHook'

// memoizing the slow component
//const MemoizedSlowComponent = memo(SlowComponent); // it will not re render if props are same4
const MemoizedSlowComponent = memo(function SlowComponentWrapper({time}) {
  return <SlowComponent time = {time} />;
})

const MemoAnotherSlow = memo(AnotherSlow)

function App() {

  // custom hook for modal
  //const {isOpen, open, close} = useModalHook();
  const [isOpen, setIsOpen] = useState(false)
  const someFunction = useCallback({}, [])
  const timeArray = useMemo(() => [2000], []) // to avoid re creating array on each render 

  return (
    <>
      <h1>Performance Optimization in React</h1>
      <hr />
      <RefactorComponent>
        <>

          <button onClick={() =>setIsOpen(true)}>Open Model (memoizing)</button>
          {isOpen && <Modal close={() =>setIsOpen(false)} />}

          <ButtonWithModal />

          {/* using customHook  */}

          {/*
            <button onClick={open}>Open Modal : Custom Hook</button>
            {isOpen && <Modal close={close} />}
            */}
          <hr />
          {/* <SlowComponent/>  or*/}
            <MemoizedSlowComponent time={timeArray} custom={someFunction}  />

            <MemoAnotherSlow>
              <p>Memo Another Slow Component</p>  {/* hanging / delay takes place */}
            </MemoAnotherSlow>

          <h2>Introduction</h2>
          <p>Performance optimization is crucial for building fast and responsive web applications. In this article, we will explore various techniques to optimize the performance of your React application.</p>
          <p>Here are some ways to optimize the performance of your React application:</p>
          <ul>
            <li>Use React.memo to memoize functional components and prevent unnecessary re-renders.</li>
            <li>Use useCallback to memoize functions and prevent unnecessary re-creations.</li>
            <li>Use useMemo to memoize expensive calculations and prevent unnecessary recalculations.</li>
            <li>Lazy load components using React.lazy and Suspense to reduce the initial load time.</li>
            <li>Optimize rendering of lists using keys and virtualization techniques.</li>
            <li>Avoid inline functions and objects in JSX to prevent unnecessary re-renders.</li>
            <li>Use a custom hook to manage modal state and logic, improving code reusability and readability.</li>
            <li>Profile and monitor performance using React Developer Tools and browser performance tools.</li>
          </ul>
          <p>By implementing these techniques, you can significantly improve the performance of your React application and provide a better user experience.</p>
          <p>Note: The SlowComponent is commented out to prevent blocking the main thread during rendering.</p>
          {/* <SlowComponent/> */}
          <footer>
            <p>&copy; 2024 Performance Optimization in React. All rights reserved.</p>
          </footer>
        </>
      </RefactorComponent>
    </>
  )
}

export default App
