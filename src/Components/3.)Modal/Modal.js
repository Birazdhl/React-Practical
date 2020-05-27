// yarn add react-modal

import React, {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ModalReact() {

     const [modal, setModal] = useState(false)
    
    return (
        <div>

           <button onClick={()=> setModal(!modal)}>Open Modal</button>

            <Modal isOpen={modal} 
            onRequestClose={() => setModal(false)} 
            shouldCloseOnOverlayClick={(false)}
             
            style = {{
                overlay: {
                    backgroundColor : 'grey'
                },
                content: {
                    color: 'orange'
                }
            }}
            // style = {}
            
            >

            
                <h2>Modal Title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={() => setModal(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalReact  

//onRequestClose   = Close Modal when clicked outside the modal,, close Modal when pressed esc
//shouldCloseOnOverlayClick = Dosen't Close Modal when clicked outside the modal,, close Modal when pressed esc
