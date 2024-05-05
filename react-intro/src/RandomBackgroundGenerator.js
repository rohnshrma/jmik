import React, { useState } from 'react'

const RandomBackgroundGenerator = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    console.log(red,green,blue);

    const [color,setColor] = useState("")

    const clickHandler = ()=>{
        setColor(`rgb(${red},${green},${blue})`)
    }


    console.log(color);

    return (
        <div className='rbg' style={{ "backgroundColor": color }} >
            <h1  >{color}</h1>
            <button onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default RandomBackgroundGenerator