import React, { useState } from 'react'

import './index.css'

const TrafficLight = () => {

    const [color, setColor] = useState("yellow")

 

    let colors = ["red", "yellow", "green"]

  return (

    <div className='container'>

        {colors.map((colorString) => {

            return (

                <div 

                key={colorString} 

                onClick={() => setColor(colorString)}  

                className={`circle    ${color === colorString ? colorString : "" }      `}>

                </div>

            )

        })}

    </div>

  )

}