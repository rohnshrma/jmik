import React, { useState } from 'react'

const Create = props => {


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value)
    }

    const descriptionChangeHandler = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.onAdd({
            title,
            description 
        })
    }


    return (
        <form className='Create' onSubmit={submitHandler}>

            <div className="form-group">
                <input onChange={titleChangeHandler} type="text" placeholder='Title' />
            </div>

            <div className="form-group">
                <input onChange={descriptionChangeHandler} type="text" placeholder='Description' />
            </div>
            <button>Add +</button>

        </form>
    )
}

export default Create