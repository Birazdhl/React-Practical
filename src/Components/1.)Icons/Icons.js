import React from 'react'
import {FaReact} from 'react-icons/fa'
import { MdAlarm } from "react-icons/md"
import {IconContext} from 'react-icons'

function Icons() {
    return (
        <div>
        <IconContext.Provider value={{color:'purple', size:'10rem'}}>
            <FaReact  />
            <MdAlarm color='red' size='10rem' />
        </IconContext.Provider>
        </div>
        
    )
}

export default Icons
