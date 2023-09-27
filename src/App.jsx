import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor]= useState("grey")
//  const changeRed= (e)=>{
//   e.preventDefault
//   setColor("red")
//  }
//  const changeYellow= (e)=>{
//   e.preventDefault
//   setColor("yellow")
//  }
//  const changeGreen= (e)=>{
//   e.preventDefault
//   setColor("green")
//  }


  return (
    <>
    <div className = 'container'>
<div onClick={()=> setColor("red")}
className={`circle  ${color=== "red" ? "red": ""}`}></div>
<div onClick={()=> setColor("yellow")}className={`circle  ${color=== "yellow" ? "yellow": ""}`}></div>
<div onClick={()=> setColor("green")}className={`circle  ${color=== "green" ? "green": ""}`}></div>
     
     </div>
    </>
  )
}

export default App
