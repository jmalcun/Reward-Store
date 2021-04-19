import Swal from "sweetalert2";

const baseUrl = "https://coding-challenge-api.aerolab.co"
const headers = {
    "content-type": "application/json",
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjYTdmNTc2NmZiNTAwMjRhYTg3OWIiLCJpYXQiOjE2MTg3ODIxOTd9.-tsDYfQKamvheGQe4p1dEAJl6ar7C7ENPLFDQTFmCmU"
}

export const getProductsOrUser = async(key) => {
    try {
        if(key === "user"){
            const resp1 = await fetch(`${baseUrl}/${key}/me`, {headers});
            const data = await resp1.json();
            return data
        }
        if(key === "history"){
            const resp1 = await fetch(`${baseUrl}/user/${key}`, {headers});
            const data = await resp1.json();
            return data
        }
        if(key === "products"){
            const resp = await fetch(`${baseUrl}/${key}`, {headers});
            const data = await resp.json();
            return data
        }
    } catch (error) {
        Swal.fire("something went wrong", "try again in a few minutes", "error")
    }
}

export const postPoints = async(points) => {
    
    try {
        await fetch(`${baseUrl}/user/points`,{
            method: 'POST',
            body: JSON.stringify({amount: points}),
            headers: headers
        })
    } catch (error) {
        Swal.fire("something went wrong", "try again in a few minutes", "error")
    }
    
}

export const postProdruct = async(id) => {
    try {
        await fetch(`${baseUrl}/redeem`,{
            method: 'POST',
            body: JSON.stringify({productId: id}),
            headers: headers
        })
    } catch (error) {
        Swal.fire("something went wrong", "try again in a few minutes", "error")
    }
} 
