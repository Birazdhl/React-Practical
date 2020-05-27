//yarn add react-color

import React,{useState} from 'react'
import {ChromePicker} from 'react-color'



function Colorpicker() {

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setshowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker? 'Choose Color Picker' : 'Pick a Color'}
                </button>

            {
                showColorPicker && (
                <ChromePicker 
                color={color} onChange={updateColor => setColor(updateColor.hex)}/>
                )
            }
            <h2>You Picked {color}</h2>
        </div>
    )

}

export default Colorpicker
