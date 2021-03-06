import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { getProductsOrUser, postProdruct } from '../../helpers/getProducts-user';
import { simulateError } from '../../helpers/simulateError';
import { ContextValues } from '../context/Context';


export const CardProduct = ({_id,name,cost,category, img, loadingMousse, setLoadingMousse}) => {

    const {user, setUser} = useContext(ContextValues)
    const {url} = img
    const {points} = user
    const faltan = cost - points;

    const handleSubmit = (e,_id,name) =>{
        e.preventDefault();
        setLoadingMousse(true)
        setTimeout(() => {
            setLoadingMousse(false)
            if(!simulateError()){
                postProdruct(_id)
                Swal.fire("congratulations on your purchase!",`Product: ${name}`,"success")
                    .then((result) => {
                    if (result.isConfirmed) {
                        getProductsOrUser("user")
                            .then( userInfo => setUser(userInfo))
                    }
                })
               
            }else{
                Swal.fire("something went wrong", "try again in a few minutes", "error")
            }
        }, 1000); 
    }
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e,_id,name)}>
                <div className={(loadingMousse) ?"card-product cursor-wait" :"card-product"}>
                    <div className="img-contain">
                        <img src={url} alt="img"></img>
                    </div>
                    <div className="priceAndBuy">
                        <div className="price">
                            <h1 className="cost">{cost}</h1><i className="fas fa-coins color-f1d87d"></i>
                        </div>
                        <button disabled={(points >= cost) ?false :true} className={(points >= cost) ?"buy-btn" :"btn-disabled"} type="submit">Redeem now</button>
                    </div>
                    {
                        (points >= cost)
                            ? <button className="shopping-button"><i className="fas fa-shopping-bag"></i></button>
                            : <button disabled={true} className="btn-missing">you need {faltan} <i className="fas fa-coins color-f1d87d"></i></button>
                    }
                   
                    <div className="description">
                        <p className="type">{category}</p>
                        <p className="product-name">{name}</p>
                    </div>
                </div>
            </form>
        </>
    )
}
