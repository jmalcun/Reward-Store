import React, { useEffect, useState } from 'react'
import homerHappy from '../assets/imagenes/homer-happy.jpg'
import homerSad from '../assets/imagenes/homer-sad.jpg'
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

export const GameResult = ({total, setStartGame}) => {

    const [modalIsOpen,setIsOpen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setStartGame(false) 
        }, 5000);
    }, [])


    return (
        <div>
            {
                (total > 0)
                    ?<div className="result-div">
                        <Modal
                            isOpen={modalIsOpen}
                            style={customStyles}
                        >
                        <div className="img-result-cotain">
                            <img src={homerHappy}></img>
                        </div>
                        <h1>congratulations you added {total} points</h1>
                        </Modal>
                    </div>
                    :<div className="result-div">
                        <Modal
                            isOpen={modalIsOpen}
                            style={customStyles}
                        >
                        <div className="img-result-cotain">
                            <img src={homerSad}></img>
                        </div>
                        <h1>you have not added coins, try it next week</h1>
                        </Modal>
                    </div>
            }
            
        </div>
    )
}
