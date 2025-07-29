import { useState } from "react";
import LifeCycleLoggerClass from "./components/LifeCycleLoggerClass"



function App() {
  const [isMountedClass, setIsMountedClass] = useState(false);

  return (
    <>
      <div>
        <h1>React Component Life Cycle Imagined Using Classes/Functional Components</h1>
      </div>

      <div className="class-container">
        <h3>Class Component</h3>
        <button
          onClick={() => setIsMountedClass(!isMountedClass)}
        >
          {isMountedClass === true ? 'unmount component' : 'mount component'}
        </button>
        {isMountedClass && <LifeCycleLoggerClass />}
        
      </div>

      <div className='functional-container'>
        <h3>Place Holder for functional</h3>
      </div>
      
    </>
  )
}

export default App
