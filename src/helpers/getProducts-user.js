import Swal from "sweetalert2";

const baseUrl = "https://coding-challenge-api.aerolab.co"
const headers = {
    "content-type": "application/json",
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgzNTZmMDc2NmZiNTAwMjRhYTg3OWYiLCJpYXQiOjE2MTkyMjAyMDh9.IXTEJp6teMtdvEWS9DWO1rxKAMtYCksaoyv44ud_c5o"
}

export const getProductsOrUser = async(key) => {
    try {
        if(key === "user"){
            const resp = await fetch(`${baseUrl}/${key}/me`, {headers});
            const data = await resp.json();
            return data
        }
        if(key === "history"){
            const resp = await fetch(`${baseUrl}/user/${key}`, {headers});
            const data = await resp.json();
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
        getProductsOrUser("user")
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
