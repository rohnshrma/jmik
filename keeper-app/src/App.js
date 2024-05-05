import React, { useState } from 'react'
import "./App.css"
import Header from './Components/Header'
import Create from './Components/Create'
import { set } from 'mongoose'

const App = () => {

   const [notes,setNotes] = useState([])

    const addNoteHandler = (noteObj) => {
        // setNotes(noteObj) XXXX
        setNotes((prevNotes)=>{
            return [noteObj, ...prevNotes]
        })
    }


    return (
        <div className='App'>
            <Header />
            <Create onAdd={addNoteHandler} />
        </div>
    )
}

export default App