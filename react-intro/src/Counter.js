import React, { useState } from 'react'

const Counter = () => {

var [count, setCount] = useState(0)

console.log("Count rendered");


    const incrementHandler = ()=>{
        let newCount = count + 1
        setCount(newCount)
    }
    
    const decrementHandler = ()=>{
        let newCount = count - 1
        setCount(newCount)
    }

    
    const increaseHandler = ()=>{
        let newCount = count + 50
        setCount(newCount)
    }



  return (
    <div className='counter'>
        <h1>{count}</h1>
        <button onClick={incrementHandler} >Increment</button>
        <button  onClick={decrementHandler}>Decrement</button>
        <button  onClick={increaseHandler}>Increase by 50</button>
    </div>
  )
}

export default Counter