//yarn add react-idle-timer

import React,{useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Idletimer() {

    const [isLoggedIn, setisLoggedIn] = useState(true)
    const [modelIsOpen, setmodelIsOpen] = useState(false)
    const idleTimerRef =  useRef(null)
    const sessionTimeoueRef = useRef(null)

    const onIdle = () => {
        console.log('User is Idle')
        setmodelIsOpen(true)
        sessionTimeoueRef.current = setTimeout(logout,5000)
    }

    const stayActive = () => {
        setmodelIsOpen(false)
        clearTimeout(sessionTimeoueRef.current)
        console.log('User is active')
    }
    
    const logout = () => {
        setmodelIsOpen(false)
        setisLoggedIn(false)
        clearTimeout(sessionTimeoueRef.current)
        console.log('User has logged out')
    }

    return (
        <div>
            {
                isLoggedIn ? <h2>Hello Biraz</h2>: <h2>Hello User</h2>
            }

           <Modal isOpen={modelIsOpen}>
               <h2>You've been idle fro a while!</h2>
               <p>You will be logged out soon</p>
               <div>
                   <button onClick={logout}>Log Me out</button>
                   <button onClick={stayActive}>Keep me singedn in</button>

               </div>
           </Modal>

            <IdleTimer 
            ref={idleTimerRef} 
            timeout={5 * 1000}
            onIdle={onIdle}>

            </IdleTimer>
        </div>
    )
}

export default Idletimer
