import React from 'react'

const Counter = () => {

    var count = 0

    const increment = ( )=>{
        count++;
        console.log("count",count);
    }

  return (
    <div className='Counter'>
        <h1>{count}</h1>
        <button onClick={increment} >+</button>
        {/* <button>-</button> */}
    </div>
  )
}

export default Counter