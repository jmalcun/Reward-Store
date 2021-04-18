import React from 'react'
import Swal from 'sweetalert2';
import { postProdruct } from '../helpers/getProducts-user';
import { simulateError } from '../helpers/simulateError';


export const CardProduct = ({_id,name,cost,category, img, loadingMousse, setLoadingMousse}) => {
    
    const {url} = img

    const handleSubmit = (e,_id,name) =>{
        e.preventDefault();
        setLoadingMousse(true)
        setTimeout(() => {
            setLoadingMousse(false)
            if(!simulateError()){
                Swal.fire("congratulations on your purchase!",`Product: ${name}`,"success")
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
                        <button className="buy-btn" type="submit">Redeem now</button>
                    </div>
                    <button className="shopping-button"><i className="fas fa-shopping-bag"></i></button>
                    <div className="description">
                        <p className="type">{category}</p>
                        <p className="product-name">{name}</p>
                    </div>
                </div>
            </form>
        </>
    )
}
