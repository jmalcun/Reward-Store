import React, { useContext, useEffect } from 'react'
import homerHappy from '../../assets/imagenes/homer-happy.jpg'
import homerSad from '../../assets/imagenes/homer-sad.jpg'
import Modal from 'react-modal';
import { postPointsFilter } from '../../helpers/postPointsFilter';
import { ContextValues } from '../context/Context';
import { getProductsOrUser } from '../../helpers/getProducts-user';
 
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

    const {setUser} = useContext(ContextValues)

    setTimeout(() => {
        setStartGame(false)
        setTimeout(() => {
            getProductsOrUser("user")
                .then( userInfo => setUser(userInfo))
        }, 1000); 
    }, 5000);

    useEffect(() => {
        if(total !== 0){
            postPointsFilter(total)
        } 
    }, [total])

    return (
        <div>
            {
                (total > 0)
                    ?<div className="result-div">
                        <Modal
                            isOpen={true}
                            style={customStyles}
                        >
                        <div className="img-result-cotain">
                            <img src={homerHappy} alt="homer-Happy"></img>
                        </div>
                        <h1>congratulations you added {total} points</h1>
                        </Modal>
                    </div>
                    :<div className="result-div">
                        <Modal
                            isOpen={true}
                            style={customStyles}
                        >
                        <div className="img-result-cotain">
                            <img src={homerSad} alt="homer-sad"></img>
                        </div>
                        <h1>you have not added coins, try it next week</h1>
                        </Modal>
                    </div>
            }
            
        </div>
    )
}
