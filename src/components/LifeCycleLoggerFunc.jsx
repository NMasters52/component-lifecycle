import React, { useEffect, useState } from 'react'

const LifeCycleLoggerFunc = () => {
    const [count, setCount] = useState(0);

   const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect( () => {
        // on mount (this will run twice when in dev mode)
        console.log('functional component mounted ...')

        // on unmount 
        return () => {
            console.log('functional component unmounted...')
        }
            
        
    }, [])

    useEffect(() => {
        // on update
        if (count > 0) {
            console.log('functional component updated', {count})
        }
    }, [count])

  return (
    <div>
        <h2>Functional Component Mounted</h2>
        <p>count: {count}</p>
        <button
            onClick={increment}
        >
            increment
        </button>
    </div>
  )
}

export default LifeCycleLoggerFunc