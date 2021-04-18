import React from 'react'
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

export const ModalSucees = () => {


    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
            <div className="img-result-cotain">
                <img alt="homer-Happy"></img>
            </div>
            <h1>congratulations, your purchase was successful </h1>
            </Modal>
        </div>
    )
}
