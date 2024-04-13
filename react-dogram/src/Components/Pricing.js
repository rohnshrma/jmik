import React from 'react'
import PricingCard from "./PricingCard"
const Pricing = () => {
  return (
    <div className='pricing wrapper'>
      <h2 className='level-2'>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div className="row">
        <PricingCard
          name="Chihuahua"
          price="Free"
          f1="5 Matches Per Day"
          f2="10 Messages Per Day"
          f3="Unlimited App Usage" />
        <PricingCard
          PricingCard
          name="Labrador"
          price="$49 / mo"
          f1="Unlimited Matches"
          f2="Unlimited Messages"
          f3="Unlimited App Usage" />
        <PricingCard
          name="Mastiff"
          price="$99 / mo"
          f1="Unlimited Matches"
          f2="Unlimited Messages"
          f3="Unlimited App Usage"
          f4="Pirority Listing"
        />
      </div>

    </div>
  )
}

export default Pricing 