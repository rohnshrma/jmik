import React from 'react'
import "./style.css"
import Card from "./Card"
import Counter from './Counter'

const App = () => {

  var cssProp = {
    color: "red"
  }
  console.log("rendering app");
  let message = "Hello"

  var current = new Date()
  current.setHours(21)
  var ch  = current.getHours()
  switch (true) {
    case ch >= 0 && ch < 6:
      message = 'Midnight'
      cssProp.color = 'black'
      break;
    case ch >= 6 && ch < 12:
      message = 'Morning'
      cssProp.color = 'skyblue'
      break;

    case ch >= 12 && ch < 16:
      message = 'Afternoon'
      cssProp.color = 'red'
      break;
    case ch >= 16 && ch < 20:
      message = 'Evening'
      cssProp.color = 'orangered'
      break;
    case ch >= 20 && ch < 24:
      message = 'night'
      cssProp.color = 'royalblue'
      break;
    default:
      break
  }


  console.log(cssProp);

  return (
    <div>
      <h1 style={cssProp}>{message}</h1>
      {/* <Card name='joe martin' email="joe@email.com" phone="467876567" imgUrl='https://static.vecteezy.com/system/resources/previews/022/484/651/non_2x/happy-3d-student-boy-with-books-on-white-background-transparent-background-free-png.png' />
    <Card name='jmik' email="jmik@email.com" phone="87655678765"/>
    <Card name='rohan' email="rohan@email.com" phone="655678876" />
    <Card name='rohan' email="rohan@email.com" phone="655678876" imgUrl='https://img.pikbest.com/png-images/qianku/graduation-photo-boy-with-square-cap-curly-hair_2203774.png!sw800' /> */}
      {/* <Counter/> */}
    </div>
  )
}

export default App