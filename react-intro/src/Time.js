import React, { useState } from 'react'

const Time = () => {

    console.log("time rendered");

     const[time,setTime]=useState("Time")

     const getTimeHandler  = ()=>{
        var ct = new Date().toLocaleTimeString()
        setTime(ct)
     }

     setInterval(getTimeHandler,1000)

  return (
    <div className='Time'>
        <h1>{time}</h1>
        {/* <button onClick={getTimeHandler} >Get Time</button> */}
    </div>
  )
}

export default Time