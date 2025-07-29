import { useState } from "react";
import LifeCycleLoggerClass from "./components/LifeCycleLoggerClass"
import LifeCycleLoggerFunc from "./components/LifeCycleLoggerFunc";



function App() {
  const [isMountedClass, setIsMountedClass] = useState(false);
  const [isMountedFunc, setIsMountedFunc] = useState(false);

  return (
    <main>
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
        <h3>Functional Component</h3>
        <button
          onClick={() => setIsMountedFunc(!isMountedFunc)}
        >
          {isMountedFunc === true ? 'unmount component' : 'mount component'}
        </button>
        {isMountedFunc && <LifeCycleLoggerFunc />}
      </div>
      
    </main>
  )
}

export default App
