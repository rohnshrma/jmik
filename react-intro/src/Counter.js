import React,{useState} from 'react'

const Counter = () => {

    console.log("rendering");

var [count , setCount] =useState(0)
    

    const increment = ( )=>{
        setCount(count+=1)
    }
    const decrement = ( )=>{
        setCount(count-=1)
    }

  return (
    <div className='Counter'>
        <h1>{count}</h1>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
    </div>
  )
}

export default Counter