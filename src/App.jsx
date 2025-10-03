
import { useState } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import modal from './modal';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <button onClick={() => setOpen(true)}>Open Modal</button>
    {isOpen && <modal setIsOpen={setOpen}/>}
    
    <h1>Performance Optimization in React</h1>
    {/* <modal/> */}
    {/* it will be opened when button is clicked */}
    {/* <Modal/> */}
    <SlowComponent />
    <h2>Introduction</h2>
    <p>Performance optimization is crucial for building fast and responsive web applications. In this article, we will explore various techniques to optimize the performance of your React application.</p>
    <p>Here are some ways to optimize the performance of your React application:</p>
    <ul>
      <li>Use React.memo to memoize functional components and prevent unnecessary re-renders.</li>
      <li>Use useCallback to memoize functions and prevent unnecessary re-creations.</li>
      <li>Use useMemo to memoize expensive calculations and prevent unnecessary recalculations.</li>
      <li>Code-splitting: Split your code into smaller chunks using React.lazy and Suspense to load components only when needed.</li>
      <li>Optimize images: Use optimized image formats and lazy loading for images to improve load times.</li>
      <li>Avoid inline functions and objects in JSX, as they create new references on each render.</li>
      <li>Use the production build of React, which is optimized for performance.</li>
      <li>Use a profiler to identify performance bottlenecks in your application.</li>
    </ul>
    <p>By implementing these techniques, you can significantly improve the performance of your React application and provide a better user experience.</p>
    <p>Note: The SlowComponent is commented out to prevent blocking the main thread during rendering.</p>
    {/* <SlowComponent/> */}
    <footer>
      <p>&copy; 2024 Performance Optimization in React. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
