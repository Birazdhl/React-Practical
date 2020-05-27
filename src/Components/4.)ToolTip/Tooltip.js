// yarn add '@tippy.js/react'

import React, {forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColouredToolTip = () => {
    return(
    <span style={{color: 'yellow'}}>Coloured</span>
    )
}

const CustomChild = forwardRef((props,ref) => {
    return(
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
  }) 

function Tooltip() {
    return (
        <div>
        <div style={{ paddingBottom:'20px'}}>
            <Tippy arrow={false} delay={1000} placement={"left"} content='Basic Tooltip'>
                <button>Hover</button>
            </Tippy>
        </div>

        <div style={{ paddingBottom:'20px'}}>
            <Tippy content={<span style={{color: 'orange'}}>Coloured</span>}>
            <button>Hover</button>
        </Tippy>
        </div>

        <div style={{ paddingBottom:'20px'}}>
            <Tippy content={<ColouredToolTip />} >
            <button>Hover</button>
        </Tippy>
        </div>

        <div style={{ paddingBottom:'20px'}}>
            <Tippy placement={"top-start"} content={<ColouredToolTip />} >
            <CustomChild></CustomChild>
            </Tippy>
        </div>

        </div>
    )
}

export default Tooltip
