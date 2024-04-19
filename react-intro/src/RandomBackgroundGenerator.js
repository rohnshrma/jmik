import React, { useState } from 'react'

const RandomBackgroundGenerator = () => {


    const [color,setColor] = useState("Color Goes here")

    function generateColor() {
        var red = Math.floor(Math.random() * 256)
        var green = Math.floor(Math.random() * 256)
        var blue = Math.floor(Math.random() * 256)

        return `rgb(${red},${green},${blue})`

    }



    var clickHandler= ()=>{
        var newColor = generateColor()
        setColor(newColor)
        console.log(color);
    }


    return (
        <div className='rbg' style={{ "backgroundColor": color }} >
            <h1  >{color}</h1>
            <button onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default RandomBackgroundGenerator