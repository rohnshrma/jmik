import React from 'react'
import "./style.css"
import Card from "./Card"

const App = () => {
  return (
    <div>App created by jmik
    <Card name='joe martin' email="joe@email.com" phone="467876567" imgUrl='https://static.vecteezy.com/system/resources/previews/022/484/651/non_2x/happy-3d-student-boy-with-books-on-white-background-transparent-background-free-png.png' />
    <Card name='jmik' email="jmik@email.com" phone="87655678765"/>
    <Card name='rohan' email="rohan@email.com" phone="655678876" />
    <Card name='rohan' email="rohan@email.com" phone="655678876" imgUrl='https://img.pikbest.com/png-images/qianku/graduation-photo-boy-with-square-cap-curly-hair_2203774.png!sw800' />
    </div>
  )
}

export default App