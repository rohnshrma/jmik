import React from 'react'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import "./Style.css"


const App = () => {
    return (
        <div className='App'>
            <Features />
            <Pricing/>
        </div>
    )
}

export default App