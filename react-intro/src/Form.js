import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")

    const changeHandler = (event) => {
        setName(event.target.value)
        console.log(name);
    }
    return (
        <div className='Form'>
            <h1>{name}</h1>
            <form>
                <input onChange={changeHandler} type="text" placeholder='Enter your name :' />
            </form>
        </div>
    )
}

export default Form