import React from 'react'

const Card = (props) => {

    console.log(props);

  return (
    <div className='Card'>
    <img src={props.imgUrl} alt="" />    
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <button>Contact</button>
    </div>
  )
}

export default Card