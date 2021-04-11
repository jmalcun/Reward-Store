import React from 'react'


export const CardHistory = ({name, cost, category, createDate, img}) => {
    
    const {url} = img
    const fecha = createDate.slice(0,10)
    console.log(img)
    

    return (
        <>
            <div className="table">
                <div className="table-item">
                    <p>{fecha}</p>
                </div>
                <div className="table-item">
                    <p>{category}</p>
                </div>
                <div className="table-item">
                    <p>{name}</p>
                </div>
                <div className="table-item">
                    <p>{cost}</p>
                </div>
                <div className="table-item">
                    <img src={url} alt="nada" />
                </div>
            </div>
        </>
    )
}