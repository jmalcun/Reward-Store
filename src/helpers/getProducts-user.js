const baseUrl = "https://coding-challenge-api.aerolab.co"
const headers = {
    "content-type": "application/json",
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
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
        console.log(error)
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
        console.log(error)
    }
    
}

export const postProdruct = async(id) => {
    try {
        await fetch(`${baseUrl}/redem`,{
            method: 'POST',
            body: JSON.stringify({productId: id}),
            headers: headers
        })
    } catch (error) {
        console.log(error)
    }
} 
