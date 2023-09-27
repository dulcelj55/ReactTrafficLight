import React, { useState } from 'react'

import './index.css'

const TrafficLight = () => {

    const [color, setColor] = useState("yellow")

 

    let colors = ["red", "yellow", "green"]

  return (

    <div className='container'>

        {colors.map((colorString) => {

            let classesString = "circle "

            if (color === colorString) {

                classesString += colorString;

            }

            return (

                <div 

                key={colorString} 

                onClick={() => setColor(colorString)}  

                className={classesString}>

                </div>

            )

        })}

    </div>

  )

}

 

export default TrafficLight