import React from 'react'
import Card from './Card'
import Heart from "../assets/heart.png"
import BullsEye from "../assets/arrow.png"
import Phone from "../assets/smartphone.png"
const Features = () => {
    return (
        <div className='features wrapper'>
            <Card title= "Easy to use."  description="So easy to use, even your dog could do it." imgUrl={Heart}/>
            <Card title= "Elite Clientele"  description="We have all the dogs, the greatest dogs." imgUrl={Phone}/>
            <Card title= "Guaranteed to work."  description="Find the love of your dog's life or your money back." imgUrl={BullsEye}/>
        </div>
    )
}

export default Features